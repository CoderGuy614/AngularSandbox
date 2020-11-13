import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/Services/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  title = "List of Authors"
  authors;
  email='me@example.com'
  colSpan = 2;
  isDisabled = false;
  imageUrl = 'http://lorempixel.com/400/200'
  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors()
  } 
  onKeyUp() {
    console.log(this.email)
  } 
  onSave($event) {
    console.log("I SAVED IT!", $event)
  }
}
