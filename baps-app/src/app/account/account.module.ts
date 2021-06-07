import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AccountPage } from './account.page';

import { AccountPageRoutingModule } from './account-routing.module';
import { ToolBarModule } from '../components/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
    ToolBarModule
  ],
  declarations: [AccountPage]
})
export class AccountPageModule {}
