import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { InitialComponent } from './initial/initial.component';
import { UsersComponent } from './users/users.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DashboardPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardPage, 
    HeaderComponent, 
    FooterComponent, 
    SideMenuComponent,
    InitialComponent,
    UsersComponent,
    UserAddComponent,
    UserListComponent,
    UserFormComponent,
    UserEditComponent
  ]
})
export class DashboardPageModule {}
