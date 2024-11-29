import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { vrs } from 'src/app/classi/util/global-variables';
import { PAGE } from 'src/environments/costanti';
import { VERSION } from 'src/environments/env';
import { AuthService } from 'src/servizi/autenticazione/auth.service';


@Component({
  selector: 'my-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './my-footer.component.html',
  styleUrl: './my-footer.component.scss'
})
export class MyFooter extends vrs implements OnInit {

  versione = VERSION;
  isAdmin: boolean = false
  PAGE = PAGE;

  constructor(
    private auth: AuthService) {
    super();
  }

  ngOnInit() {
    this.isAdmin = this.auth.isAdmin();
  }

  onChangeCompetizione() { }


  logOut() {
    this.auth.logout();
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }


}
