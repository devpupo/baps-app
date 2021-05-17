import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalBlogOnePage } from './modal-blog-one.page';

const routes: Routes = [
  {
    path: '',
    component: ModalBlogOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalBlogOnePageRoutingModule {}
