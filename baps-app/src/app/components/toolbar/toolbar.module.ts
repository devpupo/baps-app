import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ToolBarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    ToolBarComponent,
  ],
  exports: [
    ToolBarComponent,
  ]
})

export class ToolBarModule { }