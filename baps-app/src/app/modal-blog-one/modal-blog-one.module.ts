import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalBlogOnePageRoutingModule } from './modal-blog-one-routing.module';

import { ModalBlogOnePage } from './modal-blog-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalBlogOnePageRoutingModule
  ],
  declarations: [ModalBlogOnePage],
  exports: [ModalBlogOnePage]
})
export class ModalBlogOnePageModule {}
