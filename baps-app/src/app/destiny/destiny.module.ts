import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DestinyPage } from './destiny.page';

import { DestinyPageRoutingModule } from './destiny-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinyPageRoutingModule
  ],
  declarations: [DestinyPage]
})
export class DestinyPageModule {}
