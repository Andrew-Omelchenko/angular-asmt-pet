import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.scss']
})
export class OuterComponent implements OnInit {
  @Output() public messageChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }
}
