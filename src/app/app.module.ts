import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { Router, RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { CategoryComponent } from './components/category/category.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { FormsModule } from '@angular/forms';





const routes:Routes=[
  {path : 'login',component:LoginComponent},
  {path : 'products/:id',component:ProductDetailsComponent},
  {path : 'products',component:ProductListComponent},
  {path : 'search/:keyword',component:ProductListComponent},
  {path : 'category/:category-id',component:ProductListComponent},
  {path : 'category',component:CategoryComponent},
  {path : 'addproduct',component:AddproductComponent},
  {path : 'editproduct',component:EditproductComponent},
  {path : 'register',component:RegisterComponent},
  {path : 'cart',component:CartComponent},
  {path : 'home',component:HomeComponent},
  {path : 'about',component:AboutusComponent},
  {path : 'contact',component:ContactusComponent},
  {path : '',redirectTo:'/products' ,pathMatch:'full'},
  {path : '**',redirectTo:'/products' ,pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    AddproductComponent,
    EditproductComponent,
    CategoryComponent,
    CartStatusComponent,
  ],

  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
