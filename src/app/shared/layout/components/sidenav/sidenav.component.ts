import { Component, OnDestroy, OnInit } from '@angular/core';
import { ISidenavItem } from './sidenav-item.model';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
  public sidenavItems: ISidenavItem[] = [
    {
      routerLink: '/home',
      icon: 'home',
      label: 'Home',
    },
    {
      routerLink: '/routing',
      icon: 'directions',
      label: 'Routing',
    },
    {
      routerLink: '/change-detection',
      icon: 'track_changes',
      label: 'Change Detection',
    },
    {
      routerLink: '/zone',
      icon: 'update',
      label: 'Zone',
    },
    {
      routerLink: '/lifecycle-hooks',
      icon: 'replay',
      label: 'Lifecycle Hooks',
    },
  ];
  public isExpanded = false;
  public currentTitle: string = '';

  private _onDestroy$: Subject<void> = new Subject<void>();

  constructor(private _router: Router) {}

  public ngOnInit(): void {
    this._router.events
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          const item = this.sidenavItems.find(({ routerLink }) => routerLink === event.url);
          if (item) {
            this.currentTitle = item.label;
          }
        }
      });
  }

  public ngOnDestroy(): void {
  }
}
