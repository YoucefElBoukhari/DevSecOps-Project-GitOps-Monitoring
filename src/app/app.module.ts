import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsComponent } from './components/products/products.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsNavBarComponent } from './components/products/products-nav-bar/products-nav-bar.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductItemComponent } from './components/products/products-list/product-item/product-item.component';
import { StatsComponent } from './components/stats/stats.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    HomeComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductsNavBarComponent,
    ProductsListComponent,
    ProductItemComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'prodcuts', component: ProductsComponent},
      {path: 'Home', component: HomeComponent}
    ])
  ],
  providers: [
    provideClientHydration()
  ]
})
export class AppModule { }
