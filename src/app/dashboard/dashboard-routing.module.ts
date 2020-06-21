import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { InitialComponent } from './initial/initial.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: '',
        component: InitialComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
