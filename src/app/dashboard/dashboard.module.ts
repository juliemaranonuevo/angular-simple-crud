import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { InitialComponent } from './initial/initial.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [
    DashboardPage, 
    HeaderComponent, 
    FooterComponent, 
    SideMenuComponent,
    InitialComponent,
    UsersComponent
  ]
})
export class DashboardPageModule {}
