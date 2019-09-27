import {Pipe,PipeTransform} from '@angular/core';
import {Iproducts} from './product.model';


@Pipe({
    name:'search'
})

export class  searchPipe implements PipeTransform{
    transform(value:Iproducts[], userInput:string){
         userInput = userInput ? userInput.toLowerCase() : null;
         return userInput ? value.filter( (product) => 
         ( product.productName.toLowerCase().indexOf(userInput) !== -1
         )):value;

    }
   
} 