import { Component, OnInit } from '@angular/core';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  isSelected: boolean
  faStar = faStar
  faStarHalf = faStarHalf
  constructor() { }

  ngOnInit(): void {
  }

  onToggle(){
    this.isSelected = !this.isSelected
    console.log(this.isSelected)
  }

}
