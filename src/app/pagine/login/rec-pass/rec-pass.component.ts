import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { vrs } from 'src/app/classi/util/global-variables';
import { MyButton } from 'src/app/componenti/my-button/my-button.component';
import { AlertService } from 'src/servizi/applicazione/alert.service';
import { AuthService } from 'src/servizi/autenticazione/auth.service';

@Component({
  selector: 'rec-pass',
  standalone: true,
  imports: [
    MyButton,
    FormsModule
  ],
  templateUrl: './rec-pass.component.html',
  styleUrl: './rec-pass.component.scss'
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
