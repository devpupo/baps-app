import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToolBarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToolBarComponent,
  ],
  exports: [
    ToolBarComponent,
    CommonModule
  ]
})

export class ToolBarModule { }