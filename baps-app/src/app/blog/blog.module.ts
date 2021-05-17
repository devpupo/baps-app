import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BlogPage } from './blog.page';

import { BlogPageRoutingModule } from './blog-routing.module';
import { ToolBarComponent } from '../components/toolbar/toolbar.component';
import { ModalBlogTwoPage } from '../modal-blog-two/modal-blog-two.page';
import { ModalBlogThreePage } from '../modal-blog-three/modal-blog-three.page';
import { ModalBlogOnePage } from '../modal-blog-one/modal-blog-one.page';
import { ModalBlogOnePageModule } from '../modal-blog-one/modal-blog-one.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogPageRoutingModule
  ],
  declarations: [BlogPage, ToolBarComponent, ModalBlogTwoPage, ModalBlogThreePage, ModalBlogOnePage],
  entryComponents: [ModalBlogOnePage, ModalBlogTwoPage, ModalBlogThreePage]
})
export class BlogPageModule {}
