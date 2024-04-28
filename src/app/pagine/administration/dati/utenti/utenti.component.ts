import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { UtenteModel } from 'src/app/classi/model/utente.model';
import { vrs } from 'src/app/classi/util/global-variables';
import { MyButton } from 'src/app/componenti/my-button/my-button.component';
import { FormUtente } from 'src/app/componenti/my-form-modal/form-utente/form-utente.component';
import { SUCCESS_OK } from 'src/environments/env';
import { AdminDatiService } from 'src/servizi/admin/admin-dati.service';
import { AlertService } from 'src/servizi/applicazione/alert.service';
import { ConfirmDialogService } from 'src/servizi/applicazione/confirm-dialog.service';

@Component({
  selector: 'utenti',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MyButton,
    FormUtente
  ],
  templateUrl: './utenti.component.html',
  styleUrl: './utenti.component.scss'
})
export class UtentiComponent extends vrs implements OnInit {

  utenti: any = []
  utente = new UtenteModel();
  @Input() combo: any;

  constructor(
    private adminDati: AdminDatiService,
    private confirmDialogService: ConfirmDialogService,
    private alert: AlertService) {
    super();
  }

  ngOnInit() {
    this.getUtenti()
  }

  onUpdate(item: UtenteModel) {
    this.utente.set(item);
  }

  viewComp(items: any) {

    let view: string = "";
    let sep = ""
    for (let ele of items) {
      view = view + sep + this.combo.competizioni.find((i: { id: any; }) => i.id == ele).sigla;
      sep = " \n"
    }

    return view
  }

  viewRuolo(ruolo: any) {

    return this.combo.utente_ruoli.find((i: { id: any; }) => i.id == ruolo).descrizione;

  }

  onDeleteItem(item: any) {

    this.confirmDialogService.confirmGeneric(() => {
      this.deleteItem(item)
    })
  }

  deleteItem(item: any) {
    this.adminDati.delUtente(item)
   
    .subscribe({

      next: (result: any) => {
        this.reloadUtenti()
      },
      error: (error: any) => {
        this.alert.error(error);
      }
    })

  }

  reloadUtenti() {
    this.getUtenti()
    this.alert.success(SUCCESS_OK);
  }

  getUtenti() {

    this.adminDati.getUtenti()
      .pipe(finalize(() =>
        this.loading_btn = false
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
