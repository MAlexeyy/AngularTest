import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { SomeTestsComponent } from './components/some-tests/some-tests.component';
import { ProductsComponent } from './components/products/products.component';


const routes: Routes = [
  // {path:"login",component:LoginComponent},
  // {path:"admin",component:AdminComponent},
  // {path:"company",component:CompanyComponent},
  // {path:"customer",component:CustomerComponent},
  // {path:"",component:LoginComponent},
  // {path:"**",redirectTo:"/login"}
  {path:"products",component:ProductsComponent},
  {path:"",component:ProductsComponent},
  {path:"**",redirectTo:"/products"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
