import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { vrs } from 'src/app/classi/global-variables';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';
import { AuthService } from 'src/app/servizi/autenticazione/auth.service';


@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
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
