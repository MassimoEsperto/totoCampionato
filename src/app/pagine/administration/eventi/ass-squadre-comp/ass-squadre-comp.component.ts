import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { SUCCESS_OK } from 'src/app/classi/costanti';
import { vrs } from 'src/app/classi/global-variables';
import { Competizione } from 'src/app/model/Competizione';
import { AdminEventiService } from 'src/app/servizi/admin/admin-eventi.service';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';
import { ConfirmDialogService } from 'src/app/servizi/applicazione/confirm-dialog.service';

@Component({
  selector: 'ass-squadre-comp',
  templateUrl: './ass-squadre-comp.component.html',
  styleUrls: ['./ass-squadre-comp.component.scss']
})
export class AssSquadreCompComponent extends vrs implements OnInit {

  @Input() comp!: Competizione;
  @Input() combo: any;
  disponibili: any =[]
  compresi: any=[]

  constructor(
    private adminEventi: AdminEventiService,
    private confirmDialogService: ConfirmDialogService,
    private alert: AlertService) {
    super();
  }

  ngOnInit() { }

  ngOnChanges() {

    if (this.comp&&this.comp.id) {
      this.getSquadreComp()
    }
  }

  getSquadreComp() {

    this.adminEventi.getSquadreComp(this.comp.id||"")
      .pipe(finalize(() =>
        this.loading_btn = false
      ))
      .subscribe({

        next: (result: any) => {
          this.disponibili = result.disponibili
          this.compresi = result.compresi

        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

  submitForm(payload: any) {
    payload.id_comp = this.comp.id
    this.setSquadraComp(payload)
  }


  setSquadraComp(payload: any) {

    this.loading_btn = true

    this.adminEventi.setSquadraComp(payload)
      .subscribe({

        next: (result: any) => {
          this.alert.success(SUCCESS_OK);
          this.getSquadreComp()
        },
        error: (error: any) => {
          this.loading_btn = false
          this.alert.error(error);
        }
      })

  }

  onDeleteItem(item: any) {

    this.confirmDialogService.confirmGeneric(() => {
      this.delSquadraComp(item)
    })
  }


  delSquadraComp(payload: any) {

    this.adminEventi.delSquadraComp(payload)
      .subscribe({

        next: (result: any) => {
          this.alert.success(SUCCESS_OK);
          this.getSquadreComp()
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

}