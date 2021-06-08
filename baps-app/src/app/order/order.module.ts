import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { OrderPage } from './order.page';

import { OrderPageRoutingModule } from './order-routing.module';
import { ToolBarModule } from '../components/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderPageRoutingModule,
    ToolBarModule
  ],
  declarations: [OrderPage]
})
export class OrderPageModule {}
