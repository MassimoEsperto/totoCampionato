import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-locandina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-locandina.component.html',
  styleUrl: './my-locandina.component.scss'
})
export class MyLocandina implements OnInit {

  title: string = "BUON GIORNO";
  animazione: boolean = true

  constructor() { }

  ngOnInit() {
    this.changeAnimation()
  }

  changeAnimation() {
    setTimeout(() => {
      this.animazione = false
    }, 1000);
  }

}
