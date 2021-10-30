import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PurchaseOrderCreateComponent } from './purchase-order-create/purchase-order-create.component';
import { PurchaseOrderApproveComponent } from './purchase-order-approve/purchase-order-approve.component';
import { PurchaseOrderSearchComponent } from './purchase-order-search/purchase-order-search.component';
import { HomeComponent } from './home/home.component';
import { PurchaseOrderTable1Component } from './purchase-order-table1/purchase-order-table1.component';
import { LoginComponent } from './login/login.component';
import { HomeImgComponent } from './home-img/home-img.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PurchaseOrderCreateComponent,
    PurchaseOrderApproveComponent,
    PurchaseOrderSearchComponent,
    HomeComponent,
    PurchaseOrderTable1Component,
    LoginComponent,
    HomeImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
