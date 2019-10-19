
import {Component , OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {ProductService} from './product.service';
import { Iproducts} from './product.model';


@Component({
    templateUrl :'./product-details.component.html'
})



export class ProductdetailComponent implements OnInit{

    id:number;
    details :Iproducts[];
   


    constructor(private route:ActivatedRoute,private router : Router,
                private productservice:ProductService){}

    ngOnInit(){
        this.id = this.route.snapshot.params['ID'];
        this.productservice.getProductdetails(this.id).subscribe((data) => this.details = data)
       
    }


    onBack():void{
        this.router.navigate(['\products'])
    }
}

/* 
 name :string;
    img :string;
    description:string;

this.route.queryParams.subscribe((data) => {
            this.name = data['name'];
            this.img = data['image'];
            this.description= data['desc'];
        })
*/