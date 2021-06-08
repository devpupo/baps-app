import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AccountOffPage } from './accountOff.page';

import { AccountOffPageRoutingModule } from './accountOff-routing.module';
import { ToolBarModule } from '../components/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountOffPageRoutingModule,
    ToolBarModule
  ],
  declarations: [AccountOffPage]
})
export class AccountOffPageModule {}
