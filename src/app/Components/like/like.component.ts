import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'], 
 
})
export class LikeComponent implements OnInit {
  @Input('is-selected') isSelected: boolean
  @Output() change = new EventEmitter()
  faStar = faStar
  faStarHalf = faStarHalf
  constructor() { }

  ngOnInit(): void {
  }

  onToggle(){
    this.isSelected = !this.isSelected
    this.change.emit(this.isSelected)
  }


}
