import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'my-pagination',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './my-pagination.component.html',
  styleUrl: './my-pagination.component.scss'
})
export class MyPagination implements OnInit {

  @Input() data: any;
  @Output() pag = new EventEmitter();
  idxTable: number = 0;
  

  constructor() { }

  ngOnInit() {
  }


}
