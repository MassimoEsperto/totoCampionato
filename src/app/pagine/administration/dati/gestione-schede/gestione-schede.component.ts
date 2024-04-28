import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { vrs } from 'src/app/classi/util/global-variables';
import { MyButton } from 'src/app/componenti/my-button/my-button.component';
import { SUCCESS_OK } from 'src/environments/env';
import { AdminDatiService } from 'src/servizi/admin/admin-dati.service';
import { AlertService } from 'src/servizi/applicazione/alert.service';
import { ConfirmDialogService } from 'src/servizi/applicazione/confirm-dialog.service';

@Component({
  selector: 'gestione-schede',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MyButton
  ],
  templateUrl: './gestione-schede.component.html',
  styleUrl: './gestione-schede.component.scss'
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
