import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-photo-box',
  templateUrl: './photo-box.component.html',
  styleUrls: ['./photo-box.component.scss']
})
export class PhotoBoxComponent implements OnInit {

  @Input()
  member : Member
  today: number;

  @Output()
  pageChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.today = Date.now();
    
  }

  onPageChange(value): void {
    this.pageChange.emit(value)

  }

}
