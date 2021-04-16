import { Component } from '@angular/core';

@Component({
  selector: 'test-app',
  templateUrl: './app.component.html',
  styleUrls: ['./styles.css']
})
export class AppComponent {

  name:string="Welcome To Angular 8";


  a:number =2+4


  public WelcomeMessage(){

  return "Dear User"+this.name
  }


  buttonTextsize:number =40;
  applyBold:string='bold';
  public myId="testid"
  

  applyStyle(){

    var myStyles={
    'font-size.px' : this.buttonTextsize,
    'font-weight' : this.applyBold,
    
  };
  return myStyles;
}


applyBoldStyleClass:boolean=true;
applyObliqueStyleClass:boolean=true;
applyVariantStyleClass:boolean=true;

  classesToApply:string="colorStyleClass boldStyleClass obliqueStyleClass ";
  addStyleClasses(){
    var classes={
      boldStyleClass:this.applyBoldStyleClass,
      obliqueStyleClass:this.applyObliqueStyleClass,
      variantStyleClass:this.applyVariantStyleClass
    };
    return classes;
  }


public message=""

  public onClick(): void{
    console.log("Button has been clicked");
    this.message="Welcome to angular";
  }


  name1="";


  Heading:string="Student Details";



  public channel:string="Kajal Nathani";
  public names =["kajal","rahul","padma","disha"];

  public fruit ="apple";

  public switch :boolean=true;
  toggleSwitch(){

    this.switch=!this.switch;
  }

  public angularpipes:string="Start Of angular Pipes converted to upper case by {{angularpipes | uppercase}}";
  public dob:string="01/05/2020";
  public amount:number=200.652;
  public percentage:number=0.652;

  public pname:string="Kajal";


  userText :string ="Kajal";
}
