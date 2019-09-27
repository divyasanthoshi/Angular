import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'search'
})

export class  searchPipe implements PipeTransform{
    transform(value:any[], userInput:string){
         userInput = userInput ? userInput.toLowerCase() : null;
         return userInput ? value.filter((product)=> {product.productName.toLowerCase().indexOf('userInput') !== -1}):value

    }
   
} 