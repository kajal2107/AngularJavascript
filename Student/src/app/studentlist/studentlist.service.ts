import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { IStudent } from './studentlist';
import{ HttpClient } from '@angular/common/http';
import { IStudent1 } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentlistService {

  private _url:string ="/assets/data/students1.json"
  getStudents():IStudent[]{
    return[
      {id:"101", name:"kajal",gender:"Female",dateOfBirth :"30/02/1999"},
      {id:"101", name:"kajal",gender:"Female",dateOfBirth :"30/02/1999"},
      {id:"101", name:"kajal",gender:"Female",dateOfBirth :"30/02/1999"},
      {id:"101", name:"kajal",gender:"Female",dateOfBirth :"30/02/1999"},
      {id:"101", name:"kajal",gender:"Female",dateOfBirth :"30/02/1999"}
    ];
  }
  constructor(private http:HttpClient) { }
  getStudents1():Observable<IStudent1[]>{

return this.http.get<IStudent1[]>(this._url);
  }
}
