import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BlogPage } from './blog.page';

import { BlogPageRoutingModule } from './blog-routing.module';
import { ModalBlogTwoPage } from '../modal-blog-two/modal-blog-two.page';
import { ModalBlogThreePage } from '../modal-blog-three/modal-blog-three.page';
import { ModalBlogOnePage } from '../modal-blog-one/modal-blog-one.page';
import { ToolBarModule } from '../components/toolbar/toolbar.module';
import { ModalBlogOnePageModule } from '../modal-blog-one/modal-blog-one.module';
import { ModalBlogThreePageModule } from '../modal-blog-three/modal-blog-three.module';
import { ModalBlogTwoPageModule } from '../modal-blog-two/modal-blog-two.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogPageRoutingModule,
    ToolBarModule,
    ModalBlogOnePageModule,
    ModalBlogTwoPageModule,
    ModalBlogThreePageModule
  ],
  declarations: [BlogPage],
  entryComponents: [ModalBlogOnePage, ModalBlogTwoPage, ModalBlogThreePage]
})
export class BlogPageModule {}
