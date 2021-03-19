import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './components/private/admin/categories/add-category/add-category.component';
import { ListCategoriesComponent } from './components/private/admin/categories/list-categories/list-categories.component';
import { UpdateCategoryComponent } from './components/private/admin/categories/update-category/update-category.component';
import { LsitClientComponent } from './components/private/admin/client/lsit-client/lsit-client.component';
import { AddProduitComponent } from './components/private/admin/products/add-produit/add-produit.component';
import { ListProduitComponent } from './components/private/admin/products/list-produit/list-produit.component';
import { UpdateProduitComponent } from './components/private/admin/products/update-produit/update-produit.component';
import { MesCommandesComponent } from './components/private/client/mes-commandes/mes-commandes.component';
import { ProfileComponent } from './components/private/client/profile/profile.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { LandingPageComponent } from './components/public/landing-page/landing-page.component';
import { Page404Component } from './components/public/page404/page404.component';
import { RegisterComponent } from './components/public/register/register.component';
import { SigninComponent } from './components/public/signin/signin.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
 
  
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: LandingPageComponent
  },
  {
    path: "signin",
    component:SigninComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'admin',children:[
      {
        path:"category",children:[
         {path:"list",component:ListCategoriesComponent} ,
         {path:"add",component:AddCategoryComponent},
        { path:"update",component:UpdateCategoryComponent}

        ]
      }, {
        path:"product",children:[
         {path:"list",component:ListProduitComponent} ,
         {path:"add",component:AddProduitComponent},
        { path:"update",component:UpdateProduitComponent}

        ]
      },
      {
        path:"client",children:[
         {path:"list",component:LsitClientComponent} 
         

        ]
      }
    ]

  },
  {
    path:"client" ,children:[
      {
        path:"profil",component:ProfileComponent}, {path:"cmd",component:MesCommandesComponent}
    ]
  },
  //page 404
  {
    path:"**",
    component:Page404Component
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
