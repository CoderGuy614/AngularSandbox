import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthorsComponent } from './Components/authors/authors.component'
import {FormsModule} from '@angular/forms'
import { AuthorsService } from './Services/authors.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { LikeComponent } from './Components/like/like.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    LikeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatSliderModule, 
    FontAwesomeModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
