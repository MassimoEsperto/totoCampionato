import { Component, OnInit } from '@angular/core';
import { vrs } from 'src/app/classi/global-variables';
import { AdminDatiService } from 'src/app/servizi/admin/admin-dati.service';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';
import { AuthService } from 'src/app/servizi/autenticazione/auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends vrs implements OnInit {

  view: number = this.LOGIN.SIGN_IN;
  utenti: any = []

  constructor(
    private adminDati: AdminDatiService,
    private alert: AlertService,
    private auth: AuthService) {
    super();
  }

  ngOnInit() {
    this.loading_page = true
    this.auth.delCompetizione()
    this.getUtenti()
  }

  changeView(item: number) {
    this.view = item
  }


  getUtenti() {

    this.adminDati.getUtenti()
      .pipe(finalize(() =>
        setTimeout(() => {
          this.loading_page = false
        }, 3000)

      ))
      .subscribe({

        next: (result: any) => {
          this.utenti = result
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

}
