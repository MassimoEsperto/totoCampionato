import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  loading_btn:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  tabs = [{ id: 1, titolo: '1° GIORNATA', testo: 'QUESTO È IL PRIMO TESTO' },
  { id: 2, titolo: '2° GIORNATA hjhjhjhhj', testo: 'QUESTO È LA SECONDA TESTO' },
  { id: 3, titolo: '3° GIORNATA', testo: 'QUESTO È LA TERZA TESTO' },
  { id: 4, titolo: '4° GIORNATA', testo: 'QUESTO È LA QUARRTA TESTO' },
  { id: 5, titolo: '5° GIORNATA', testo: 'QUESTO È LA QUINTA TESTO' }]

  tab: any;

  selectedTab(e: any) {
    this.tab = e
  }

}
