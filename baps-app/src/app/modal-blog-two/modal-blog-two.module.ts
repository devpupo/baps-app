import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalBlogTwoPageRoutingModule } from './modal-blog-two-routing.module';

import { ModalBlogTwoPage } from './modal-blog-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalBlogTwoPageRoutingModule
  ],
  declarations: [ModalBlogTwoPage],
  exports: [ModalBlogTwoPage]
})
export class ModalBlogTwoPageModule {}
