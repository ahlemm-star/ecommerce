import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/public/landing-page/landing-page.component';
import { SigninComponent } from './components/public/signin/signin.component';
import { RegisterComponent } from './components/public/register/register.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { AddCategoryComponent } from './components/private/admin/categories/add-category/add-category.component';
import { ListCategoriesComponent } from './components/private/admin/categories/list-categories/list-categories.component';
import { UpdateCategoryComponent } from './components/private/admin/categories/update-category/update-category.component';
import { ListProduitComponent } from './components/private/admin/products/list-produit/list-produit.component';
import { AddProduitComponent } from './components/private/admin/products/add-produit/add-produit.component';
import { UpdateProduitComponent } from './components/private/admin/products/update-produit/update-produit.component';
import { LsitClientComponent } from './components/private/admin/client/lsit-client/lsit-client.component';
import { ProfileComponent } from './components/private/client/profile/profile.component';
import { MesCommandesComponent } from './components/private/client/mes-commandes/mes-commandes.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http";
import { Page404Component } from './components/public/page404/page404.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SigninComponent,
    RegisterComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    AddCategoryComponent,
    ListCategoriesComponent,
    UpdateCategoryComponent,
    ListProduitComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    LsitClientComponent,
    ProfileComponent,
    MesCommandesComponent,
    Page404Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
