import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeImgComponent } from './home-img/home-img.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PurchaseOrderApproveComponent } from './purchase-order-approve/purchase-order-approve.component';
import { PurchaseOrderCreateComponent } from './purchase-order-create/purchase-order-create.component';
import { PurchaseOrderSearchComponent } from './purchase-order-search/purchase-order-search.component';
import { PurchaseOrderTable1Component } from './purchase-order-table1/purchase-order-table1.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,children:[
    { path: 'index', component: HomeImgComponent },
    { path: 'po-create', component: PurchaseOrderCreateComponent, children:[
      {path:'table/:id',component:PurchaseOrderTable1Component}
    ] }, 
    { path: 'po-approve', component: PurchaseOrderApproveComponent },
    { path: 'po-search', component: PurchaseOrderSearchComponent }
  ] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
