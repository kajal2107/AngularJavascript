import { Component, OnInit } from '@angular/core';

import { IStudent } from './studentlist';
import{ StudentlistService } from './studentlist.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
  providers:[ StudentlistService]
})
export class StudentlistComponent implements OnInit {

  // Temporary Comment because 2 constructor is not used
  // students:IStudent[];
  // constructor(private _studentlistService : StudentlistService) { 

  //   this.students=this._studentlistService.getStudents();
  // }
  students=[
    {id:"101", name:"kajal",gender:"Female",dateOfBirth :"30/02/1999"},
    {id:"102", name:"kajal",gender:"Female",dateOfBirth :"30/02/1999"},
    {id:"103", name:"kajal",gender:"Female",dateOfBirth :"30/02/1999"},
    {id:"104", name:"kajal",gender:"Female",dateOfBirth :"30/02/1999"},
    {id:"105", name:"kajal",gender:"Female",dateOfBirth :"30/02/1999"}
  ];
  ngOnInit() {
  }
constructor(private router :Router){}
  onSelect(student){

    this.router.navigate(['/students',student.id]);
  }

}

// function student(student: any) {
//   throw new Error('Function not implemented.');
// }

