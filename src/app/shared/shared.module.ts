import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OuterComponent } from './outer/outer.component';



@NgModule({
  declarations: [
    OuterComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    OuterComponent,
  ],
})
export class SharedModule {}
