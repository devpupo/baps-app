import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DestinyPage } from './destiny.page';

import { DestinyPageRoutingModule } from './destiny-routing.module';
import { ToolBarComponent } from '../components/toolbar/toolbar.component';
import { ModalDestinyPage } from '../modal-destiny/modal-destiny.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinyPageRoutingModule
  ],
  declarations: [DestinyPage, ToolBarComponent, ModalDestinyPage],
  entryComponents: [ModalDestinyPage]

})
export class DestinyPageModule {}
