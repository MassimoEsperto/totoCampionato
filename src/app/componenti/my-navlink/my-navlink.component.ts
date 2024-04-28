import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyIcona } from '../my-icona/my-icona.component';

@Component({
  selector: 'my-navlink',
  templateUrl: './my-navlink.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MyIcona
  ],
  styleUrl: './my-navlink.component.scss'
})
export class MyNavlink implements OnInit {

  @Output() myClick = new EventEmitter();

  @Input() isCollapse = false;
  @Input() link: string = "#";
  @Input() icon: string = "";
  @Input() label: string = "";
  @Input() exist = false;


  constructor() { }

  ngOnInit(): void {
  }

  

}
