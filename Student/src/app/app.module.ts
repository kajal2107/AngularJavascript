import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { HomeComponent } from './home/home.component';
import { NopagetodisplayComponent } from './Nopagetodisplay/nopagetodisplay.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { StudentlistService} from './studentlist/studentlist.service';
import { StudentDetailComponent } from './student-detail/student-detail.component';



const appRoutes:Routes=[

   {path:'home',component:HomeComponent},
   {path:'students',component:StudentlistComponent},
   {path:'',redirectTo:'/home',pathMatch:'full'},
   {path:'**',component:NopagetodisplayComponent},
   {path:'students/id',component:StudentDetailComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    HomeComponent,
    NopagetodisplayComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [StudentlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
