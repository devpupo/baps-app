import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'destiny',
    loadChildren: () => import('./destiny/destiny.module').then(m => m.DestinyPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then(m => m.OrderPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogPageModule)
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  // },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'accountoff',
    loadChildren: () => import('./accountOff/accountOff.module').then(m => m.AccountOffPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'modal-blog-one',
    loadChildren: () => import('./modal-blog-one/modal-blog-one.module').then( m => m.ModalBlogOnePageModule)
  },
  {
    path: 'modal-blog-two',
    loadChildren: () => import('./modal-blog-two/modal-blog-two.module').then( m => m.ModalBlogTwoPageModule)
  },
  {
    path: 'modal-blog-three',
    loadChildren: () => import('./modal-blog-three/modal-blog-three.module').then( m => m.ModalBlogThreePageModule)
  },
  {
    path: 'modal-destiny',
    loadChildren: () => import('./modal-destiny/modal-destiny.module').then( m => m.ModalDestinyPageModule)
  },
  {
    path: 'edit-info',
    loadChildren: () => import('./edit-info/edit-info.module').then( m => m.EditInfoPageModule)
  }

  // {
  //   path: 'LoginPage', component: LoginPage
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
