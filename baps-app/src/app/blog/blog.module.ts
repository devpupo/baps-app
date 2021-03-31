import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BlogPage } from './blog.page';

import { BlogPageRoutingModule } from './blog-routing.module';
import { ToolBarComponent } from '../components/toolbar/toolbar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogPageRoutingModule
  ],
  declarations: [BlogPage, ToolBarComponent]
})
export class BlogPageModule {}
