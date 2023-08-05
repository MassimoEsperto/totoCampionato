import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { SUCCESS_OK } from 'src/app/classi/costanti';
import { vrs } from 'src/app/classi/global-variables';
import { Utente } from 'src/app/model/Utente';
import { AdminDatiService } from 'src/app/servizi/admin/admin-dati.service';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';
import { ConfirmDialogService } from 'src/app/servizi/applicazione/confirm-dialog.service';

@Component({
  selector: 'utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.scss']
})
export class UtentiComponent extends vrs implements OnInit {

  utenti: any = []
  utente = new Utente();
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

  onUpdate(item: Utente) {
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
