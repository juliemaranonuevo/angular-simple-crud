import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { InitialComponent } from './initial/initial.component';
import { UsersComponent } from './users/users.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserItemComponent } from './users/user-item/user-item.component';

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
        component: UsersComponent,
        children: [
          {
            path: '',
            component: UserListComponent
          },
          {
            path: 'create',
            component: UserAddComponent
          },
          {
            path: ':id',
            component: UserItemComponent
          },
          {
            path: ':id/edit',
            component: UserEditComponent
          },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
