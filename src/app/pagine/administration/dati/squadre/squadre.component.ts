import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { vrs } from 'src/app/classi/util/global-variables';
import { MyButton } from 'src/app/componenti/my-button/my-button.component';
import { SUCCESS_OK } from 'src/environments/env';
import { AdminDatiService } from 'src/servizi/admin/admin-dati.service';
import { AlertService } from 'src/servizi/applicazione/alert.service';
import { ConfirmDialogService } from 'src/servizi/applicazione/confirm-dialog.service';

@Component({
  selector: 'squadre',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MyButton
  ],
  templateUrl: './squadre.component.html',
  styleUrl: './squadre.component.scss'
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
