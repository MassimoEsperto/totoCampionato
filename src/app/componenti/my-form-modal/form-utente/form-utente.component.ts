import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { vrs } from 'src/app/classi/global-variables';
import { Utente } from 'src/app/model/Utente';
import { AdminDatiService } from 'src/app/servizi/admin/admin-dati.service';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';

@Component({
  selector: 'form-utente',
  templateUrl: './form-utente.component.html',
  styleUrls: ['./form-utente.component.scss']
})
export class FormUtente extends vrs implements OnInit {

  @Input() utente!: Utente;
  @Input() combo: any;
  @Output() submit = new EventEmitter();
  @ViewChild('closeModal') closeModal!: ElementRef;

  constructor(
    private adminDati: AdminDatiService,
    private alert: AlertService) {
    super();
  }

  ngOnInit() {}

  onUpdate(item: Utente) {

    this.loading_btn = true

    this.adminDati.updUtente(item)
      .pipe(finalize(() =>
        this.loading_btn = false
      ))
      .subscribe({

        next: (result: any) => {
          this.submit.emit()
          this.closeModal.nativeElement.click()
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

  ngOnDestroy() {

    document.body.removeAttribute("style");

  }
}