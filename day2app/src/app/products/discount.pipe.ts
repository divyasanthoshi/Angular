import {Pipe, PipeTransform} from "@angular/core";

@Pipe
({
    name:'discountpipe'
})

export  class DiscountPipe implements PipeTransform{

    discount:number;
    transform(value:number){
        this.discount = value * .05;
        value = value - this.discount;
        return value;
    }

} 
