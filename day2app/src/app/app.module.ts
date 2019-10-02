import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './header.component';
import { productComponent } from './products/products.component';
import { MyUpperPipe } from './products/myupper.pipe';
import { DiscountPipe } from './products/discount.pipe';
import {searchPipe } from './products/productfilter.pipe';
import { starComponent } from './shared/star.component';
import { ProductService } from './products/product.service';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    productComponent,
    MyUpperPipe,
    DiscountPipe,
    searchPipe,
    starComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
