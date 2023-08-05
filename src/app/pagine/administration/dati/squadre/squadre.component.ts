import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { SUCCESS_OK } from 'src/app/classi/costanti';
import { vrs } from 'src/app/classi/global-variables';
import { AdminDatiService } from 'src/app/servizi/admin/admin-dati.service';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';
import { ConfirmDialogService } from 'src/app/servizi/applicazione/confirm-dialog.service';

@Component({
  selector: 'squadre',
  templateUrl: './squadre.component.html',
  styleUrls: ['./squadre.component.scss']
})
export class SquadreComponent extends vrs implements OnInit {

  squadre: any = []

  constructor(
    private adminDati: AdminDatiService,
    private confirmDialogService: ConfirmDialogService,
    private alert: AlertService) {
    super();
  }

  ngOnInit() {
    this.getSquadre()
  }


  getSquadre() {

    this.adminDati.getSquadre()

      .subscribe({

        next: (result: any) => {
          this.squadre = result
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }


  setSquadra(payload: any) {

    this.loading_btn = true

    this.adminDati.setSquadra(payload)
      .pipe(finalize(() =>
        this.loading_btn = false
      ))
      .subscribe({

        next: (result: any) => {
          this.alert.success(SUCCESS_OK);
          this.getSquadre()
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }


  onDeleteItem(item: any) {

    this.confirmDialogService.confirmGeneric(() => {
      this.delSquadra(item)
    })
  }


  delSquadra(payload: any) {

    this.adminDati.delSquadra(payload)
      .subscribe({

        next: (result: any) => {
          this.alert.success(SUCCESS_OK);
          this.getSquadre()

        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

}
