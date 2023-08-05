import { Component, OnInit } from '@angular/core';
import { SUCCESS_OK } from 'src/app/classi/costanti';
import { vrs } from 'src/app/classi/global-variables';
import { AdminDatiService } from 'src/app/servizi/admin/admin-dati.service';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';
import { ConfirmDialogService } from 'src/app/servizi/applicazione/confirm-dialog.service';

@Component({
  selector: 'gestione-schede',
  templateUrl: './gestione-schede.component.html',
  styleUrls: ['./gestione-schede.component.scss']
})
export class GestioneSchedeComponent extends vrs implements OnInit {

  schede: any = []

  constructor(
    private adminDati: AdminDatiService,
    private confirmDialogService: ConfirmDialogService,
    private alert: AlertService) {
    super();
  }

  ngOnInit(): void {
    this.getSchede()
  }

  getSchede() {

    this.adminDati.getSchede()

      .subscribe({

        next: (result: any) => {
          this.schede = result
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

  onDeleteItem(item: any) {

    this.confirmDialogService.confirmGeneric(() => {
      this.delScheda(item)
    })
  }


  delScheda(payload: any) {

    this.adminDati.delScheda(payload)
      .subscribe({

        next: (result: any) => {
          this.alert.success(SUCCESS_OK);
          this.getSchede()
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }
}
