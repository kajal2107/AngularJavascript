import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-student-detail',
  template: `
    
  <h3>You hAVE Selected student with id={{studentId}}></h3>
 
  <p>
      student-detail works!
    </p>
  `,
  styles: []
})
 // Write inside Template<button (click)="goPrevious()"><<-previous</button>
  // <button(click)="goNext()">next--></button>
export class StudentDetailComponent implements OnInit {

  public studentId;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let id1=parseInt(this.route.snapshot.paramMap.get('id'));
    // ParamMap  this.route.paramMap.subscribe((params:ParamMap)=>{
    //   let id1=parseInt(params.get('id'));
    // })
    this.studentId=id1;
  }
  // goPrevious(){
  //   let previousId=this.studentId-1;
  //   this.router.navigate(['/students',previousId]);
  // }
  // goNext(){
  //   let nextId=this.studentId+1;
  //   this.router.navigate(['/students',nextId]);
  // }


}
