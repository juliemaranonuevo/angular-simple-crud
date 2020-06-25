import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { AddComponent } from './add/add.component';
import { FormComponent } from './form/form.component';
import { SideMenuComponent } from './../side-menu/side-menu.component';
import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProductsPage, HeaderComponent, FooterComponent, SideMenuComponent, FormComponent, AddComponent]
})
export class ProductsPageModule {}
