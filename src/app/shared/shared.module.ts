import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './layout/components/sidenav/sidenav.component';
import { BodyComponent } from './layout/components/body/body.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    LayoutComponent,
    SidenavComponent,
    BodyComponent,
  ],
  exports: [LayoutComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatToolbarModule,
  ],
})
export class SharedModule {}
