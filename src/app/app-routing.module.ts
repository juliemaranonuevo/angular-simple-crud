import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },

  // {
  //   path: 'products',
  //   loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'products',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'products',
  //   loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
