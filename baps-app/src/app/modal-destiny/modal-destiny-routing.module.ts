import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDestinyPage } from './modal-destiny.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDestinyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDestinyPageRoutingModule {}
