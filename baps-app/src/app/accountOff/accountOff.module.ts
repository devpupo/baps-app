import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AccountOffPage } from './accountOff.page';

import { AccountOffPageRoutingModule } from './accountOff-routing.module';
import { ToolBarComponent } from '../components/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountOffPageRoutingModule
  ],
  declarations: [AccountOffPage, ToolBarComponent]
})
export class AccountOffPageModule {}
