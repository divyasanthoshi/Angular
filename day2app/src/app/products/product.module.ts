import { NgModule} from '@angular/core';

import { sharedModule } from '../shared/shared.module';


import { productComponent } from './products.component';
import { MyUpperPipe } from './myupper.pipe';
import { DiscountPipe } from './discount.pipe';
import { searchPipe } from './productfilter.pipe';
import { ProductService } from './product.service';
import { ProductdetailComponent } from './product-details.component';
import { AppRoutingModule } from '../app-routing.module';





@NgModule({
     imports:[
        sharedModule,   
         AppRoutingModule,

     ],
    declarations:[
        productComponent,
         ProductdetailComponent,
        MyUpperPipe,
        DiscountPipe,
        searchPipe,
    ],
    providers:
    [
        ProductService 
    ]

})

export class Productmodule{

}