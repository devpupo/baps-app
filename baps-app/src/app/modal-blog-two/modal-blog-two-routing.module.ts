import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalBlogTwoPage } from './modal-blog-two.page';

const routes: Routes = [
  {
    path: '',
    component: ModalBlogTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalBlogTwoPageRoutingModule {}
