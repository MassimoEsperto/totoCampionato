import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/servizi/player/player.service';

@Component({
  selector: 'my-navbar',
  templateUrl: './my-navbar.component.html',
  styleUrls: ['./my-navbar.component.scss']
})
export class MyNavbar implements OnInit {

  play_comp = this.player.getCompetizione()

  constructor(private route : ActivatedRoute,private elementRef: ElementRef,private player :PlayerService) { }

  ngOnInit(): void {
  }

  isCollapse:boolean=false


}
