import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDestinyPageRoutingModule } from './modal-destiny-routing.module';

import { ModalDestinyPage } from './modal-destiny.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDestinyPageRoutingModule
  ],
  declarations: [ModalDestinyPage],
  exports: [ModalDestinyPage]
})
export class ModalDestinyPageModule {}
