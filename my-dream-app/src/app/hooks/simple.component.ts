import { JsonPipe } from "@angular/common";
import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
@Component({
    selector:'simple',
    template:
   
    "You have Entered:{{simpleInput}}"
    
})

export class SimpleComponent implements OnChanges{

   @Input() simpleInput:string;
   ngOnChanges(changes :SimpleChanges){
       for(let propertyName in changes){
           let change =changes[propertyName];
           let current =JSON.stringify(change.currentValue)
           let previous =JSON.stringify(change.previousValue)

           console.log(propertyName+':current Value='+current+ ',previous Value ='+previous)
       }
   }

}
