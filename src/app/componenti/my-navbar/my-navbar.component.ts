import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/servizi/player/player.service';
import { MyFooter } from '../my-footer/my-footer.component';
import { PAGE } from 'src/environments/costanti';
import { RouterModule } from '@angular/router';
import { MyNavlink } from '../my-navlink/my-navlink.component';
import { MyIcona } from '../my-icona/my-icona.component';


@Component({
  selector: 'my-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MyFooter,
    RouterModule,
    MyNavlink,
    MyIcona
  ],
  templateUrl: './my-navbar.component.html',
  styleUrl: './my-navbar.component.scss'
})
export class MyNavbar implements OnInit {

  exist: boolean = this.player.existCompetizione()
  PAGE = PAGE

  constructor(private player: PlayerService
  ) { }

  ngOnInit(): void {
  }

  isCollapse: boolean = false


}
