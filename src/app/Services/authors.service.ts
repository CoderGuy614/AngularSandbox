import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  getAuthors() {
    return ['Author3', 'Author4', 'Author5']
  } 
}
