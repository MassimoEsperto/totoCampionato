import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-pagination',
  templateUrl: './my-pagination.component.html',
  styleUrls: ['./my-pagination.component.scss']
})
export class MyPagination implements OnInit {

  @Input() input_table!: any;
num:number=3

  records:number=0
modulo:number=0
pages:number=0
sel:number=1
list:[]=[]

  constructor() { }

  ngOnInit(){
  }


}
