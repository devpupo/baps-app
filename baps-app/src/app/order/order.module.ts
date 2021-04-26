import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { OrderPage } from './order.page';

import { OrderPageRoutingModule } from './order-routing.module';
import { ToolBarComponent } from '../components/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderPageRoutingModule
  ],
  declarations: [OrderPage, ToolBarComponent]
})
export class OrderPageModule {}
