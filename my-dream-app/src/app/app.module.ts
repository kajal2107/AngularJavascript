import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { TestComponent } from './test/test.component';
import { SimpleComponent } from './hooks/simple.component';

@NgModule({
  declarations: [
    AppComponent,StudentComponent, TestComponent,SimpleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
