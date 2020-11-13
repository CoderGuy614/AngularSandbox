import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthorsComponent } from './Components/authors/authors.component'
import { AuthorsService } from './Services/authors.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
