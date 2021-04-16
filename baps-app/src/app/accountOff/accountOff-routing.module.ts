import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountOffPage } from './accountOff.page';

const routes: Routes = [
  {
    path: '',
    component: AccountOffPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountOffPageRoutingModule {}
