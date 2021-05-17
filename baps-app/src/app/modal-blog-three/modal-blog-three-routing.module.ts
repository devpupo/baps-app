import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalBlogThreePage } from './modal-blog-three.page';

const routes: Routes = [
  {
    path: '',
    component: ModalBlogThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalBlogThreePageRoutingModule {}
