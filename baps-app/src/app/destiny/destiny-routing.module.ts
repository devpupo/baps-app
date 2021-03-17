import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinyPage } from './destiny.page';

const routes: Routes = [
  {
    path: '',
    component: DestinyPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinyPageRoutingModule {}
