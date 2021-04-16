import { Component } from '@angular/core';
import { StudentlistService } from './studentlist/studentlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student';
  public students1=[];
  constructor(private _studentService:StudentlistService){}
  ngOnInit(){
    this._studentService.getStudents1()
    .subscribe(data => this.students1 = data);
  }
}
