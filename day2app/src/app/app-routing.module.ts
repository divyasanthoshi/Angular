import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './products/notfound.component';
import { productComponent } from './products/products.component';
import { ProductdetailComponent } from './products/product-details.component';
import { RouterGuard } from './app-routerguard';


const routes: Routes = [
  {path : 'products' , component : productComponent  },
  {path : 'products/:ID' , canActivate:[RouterGuard], component :ProductdetailComponent  },
  { path : 'orders' , component : OrdersComponent},
  { path : 'home' , component : HomeComponent },
  { path : '' , component : HomeComponent },      
  { path : '' , redirectTo: 'home' , pathMatch :'full' },
  { path : '**' , component : NotFoundComponent },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[RouterGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
