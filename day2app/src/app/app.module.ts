import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './header.component';
import { ProductService } from './products/product.service';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { NotFoundComponent } from './products/notfound.component';
import { Productmodule } from './products/product.module';
import { FormsModule } from '@angular/forms';



@NgModule({

  /* all components and pipes will be declared here */
  declarations: [
    AppComponent,
    headerComponent,
    HomeComponent,
    OrdersComponent,
    NotFoundComponent
  ],

  /* all module will be delared here*/
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Productmodule,
    AppRoutingModule],
    

  /*All the services will be declared here */
  providers: [ProductService],

  /* main component will be declared here */
  bootstrap: [AppComponent]
})
export class AppModule { }
