import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalBlogThreePageRoutingModule } from './modal-blog-three-routing.module';

import { ModalBlogThreePage } from './modal-blog-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalBlogThreePageRoutingModule
  ],
  declarations: [ModalBlogThreePage],
  exports: [ModalBlogThreePage]
})
export class ModalBlogThreePageModule {}
