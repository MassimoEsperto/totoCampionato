import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { UtenteModel } from 'src/app/classi/model/utente.model';
import { vrs } from 'src/app/classi/util/global-variables';
import { AdminDatiService } from 'src/servizi/admin/admin-dati.service';
import { AlertService } from 'src/servizi/applicazione/alert.service';
import { MyButton } from '../../my-button/my-button.component';


@Component({
  selector: 'form-utente',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MyButton
  ],
  templateUrl: './form-utente.component.html',
  styleUrl: './form-utente.component.scss'
})
export class FormUtente extends vrs implements OnInit {

  @Input() utente!: UtenteModel;
  @Input() combo: any;
  @Output() submit = new EventEmitter();
  @ViewChild('closeModal') closeModal!: ElementRef;

  constructor(
    private adminDati: AdminDatiService,
    private alert: AlertService) {
    super();
  }

  ngOnInit() {}

  onUpdate(item: UtenteModel) {

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