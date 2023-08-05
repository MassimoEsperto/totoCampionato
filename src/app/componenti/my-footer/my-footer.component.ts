import { Component, OnInit } from '@angular/core';
import { VERSION } from 'src/app/classi/costanti';
import { vrs } from 'src/app/classi/global-variables';
import { AuthService } from 'src/app/servizi/autenticazione/auth.service';

@Component({
  selector: 'my-footer',
  templateUrl: './my-footer.component.html',
  styleUrls: ['./my-footer.component.scss']
})
export class MyFooter extends vrs implements OnInit {

  versione = VERSION;
  isAdmin: boolean = false

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
