import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DestinyPage } from './destiny.page';

import { DestinyPageRoutingModule } from './destiny-routing.module';
import { ModalDestinyPage } from '../modal-destiny/modal-destiny.page';
import { ToolBarModule } from '../components/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinyPageRoutingModule,
    ToolBarModule
  ],
  declarations: [DestinyPage, ModalDestinyPage],
  entryComponents: [ModalDestinyPage]

})
export class DestinyPageModule {}
