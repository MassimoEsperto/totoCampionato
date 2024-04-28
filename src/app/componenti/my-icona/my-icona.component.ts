import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-icona',
  standalone: true,
  imports: [],
  templateUrl: './my-icona.component.html',
  styleUrl: './my-icona.component.scss'
})
export class MyIcona {

  @Input() name: string = "";
}
