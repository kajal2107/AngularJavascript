import { Component } from "@angular/core";
@Component({
    selector:'my-student',
    templateUrl:'student.component.html',
    styleUrls: ['styles.css']
   
})
export class StudentComponent{
    firstName:string="Kajal";
    lastName:string="Nathani";
    gender:string="Female";
    age:number=21;
}