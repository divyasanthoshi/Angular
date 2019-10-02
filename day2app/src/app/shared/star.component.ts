import {Component,OnInit,OnChanges,OnDestroy,Input, Output,EventEmitter} from '@angular/core';


@Component({
    selector:'app-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css'],
})

export class starComponent implements OnInit,OnChanges,OnDestroy{

    @Input() rating:number;
    starwidth :number 
    @ Output() starClicked : EventEmitter<string> = new EventEmitter<string>()

    constructor(){
        
    }

    ngOnInit(){

    }

    ngOnChanges(){
        this.starwidth = this.rating*(86/6.3);

    }

    onStar():void{
        this.starClicked.emit(`the number of stars is  ${this.rating}` )
    }

    ngOnDestroy(){

    }

    
}