import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { vrs } from 'src/app/classi/global-variables';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';
import { AuthService } from 'src/app/servizi/autenticazione/auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'rec-pass',
  templateUrl: './rec-pass.component.html',
  styleUrls: ['./rec-pass.component.scss']
})
export class RecPassComponent extends vrs implements OnInit {

  @Output() submitto = new EventEmitter();
  @Input() combo: any;
  
  constructor(
    private alert: AlertService,
    private auth: AuthService) {
    super();
  }

  ngOnInit(): void {
  }

  onRecPass(payload: any) {

    this.loading_btn = true

    this.auth.recPass(payload.utente.id)
      .pipe(finalize(() =>
        this.loading_btn = false
      ))
      .subscribe({

        next: (result: any) => {
          this.alert.success("A breve riceverai una email con la tua password");
          this.submitto.emit(this.LOGIN.SIGN_IN)

        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

}
