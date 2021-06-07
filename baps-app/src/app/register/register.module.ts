import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RegisterPage } from './register.page';

import { RegisterPageRoutingModule } from './register-routing.module';
import { ToolBarModule } from '../components/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ToolBarModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}

