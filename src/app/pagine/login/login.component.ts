import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { vrs } from 'src/app/classi/util/global-variables';
import { AdminDatiService } from 'src/servizi/admin/admin-dati.service';
import { AlertService } from 'src/servizi/applicazione/alert.service';
import { AuthService } from 'src/servizi/autenticazione/auth.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { RecPassComponent } from './rec-pass/rec-pass.component';
import { MyLocandina } from 'src/app/componenti/my-locandina/my-locandina.component';
import { CommonModule } from '@angular/common';
import { MyIcona } from 'src/app/componenti/my-icona/my-icona.component';

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    CommonModule,
    SignInComponent,
    RegisterComponent,
    RecPassComponent,
    MyLocandina,
    MyIcona
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
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
