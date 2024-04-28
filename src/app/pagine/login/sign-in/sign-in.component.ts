import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { vrs } from 'src/app/classi/util/global-variables';
import { MyButton } from 'src/app/componenti/my-button/my-button.component';
import { MyIcona } from 'src/app/componenti/my-icona/my-icona.component';
import { AlertService } from 'src/servizi/applicazione/alert.service';
import { AuthService } from 'src/servizi/autenticazione/auth.service';



@Component({
  selector: 'sign-in',
  standalone: true,
  imports: [
    MyButton,
    FormsModule,
    MyIcona
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent extends vrs implements OnInit {

  @Output() submitto = new EventEmitter();
  
  constructor(
    private router: Router,
    private alert: AlertService,
    private auth: AuthService) {
    super();
  }

  ngOnInit(){}

  onLogin(payload: any) {

    this.auth.login(payload)
      .pipe(finalize(() =>
        this.loading_btn = false
      ))
      .subscribe({

        next: (result: any) => {
          this.router.navigate(['dashboard']);
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

}
