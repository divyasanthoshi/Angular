import {Injectable} from '@angular/core';
import {Iproducts} from './product.model';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable()

export class ProductService{

    private url ='https://ngproductsparam.herokuapp.com/api/getProductDetails';

    
    constructor(private http:HttpClient){}
    

    getProduct(): Observable<Iproducts[]>{
        return this.http.get<Iproducts[]>(this.url)
    }


        

}