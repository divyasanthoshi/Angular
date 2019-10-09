import { Component } from '@angular/core';
import {Iproducts} from './product.model';
import {ProductService} from './product.service'


@Component({
    selector:'app-product',
    templateUrl:'./products.component.html',
    styleUrls :['./products.component.css'],
    styles :[
        `.online{
            background-color :gray
        }`
    ]
})

export class productComponent{

    title :string = "product list"; 
    show:boolean = false;
    imagewidth:number = 100;
    userText :string;
    serverStatus :string = "Offline";
    products : Iproducts[];


    constructor(private productservice : ProductService){
        this.serverStatus = Math.random() > 0.5 ? "Online":"Offline";
    }

    ngOnInit(){
        this.productservice.getProduct()
        .subscribe((data) => this.products = data);
    }
    
    
    

    
    


    

   



toggleimage():void{
    this.show = !this.show;
}

getColor(){
    return this.serverStatus === "Online" ? "Green" :"red";
}

datareceive(message:string):void{
    this.title = "the Product list >>>>>" + message;
}




}    









    
