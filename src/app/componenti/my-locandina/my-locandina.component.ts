import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-locandina',
  templateUrl: './my-locandina.component.html',
  styleUrls: ['./my-locandina.component.scss']
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
