import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { SUCCESS_OK } from 'src/app/classi/costanti';
import { vrs } from 'src/app/classi/global-variables';
import { Competizione } from 'src/app/model/Competizione';
import { AdminEventiService } from 'src/app/servizi/admin/admin-eventi.service';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';
import { ConfirmDialogService } from 'src/app/servizi/applicazione/confirm-dialog.service';

@Component({
  selector: 'ass-giornate-comp',
  templateUrl: './ass-giornate-comp.component.html',
  styleUrls: ['./ass-giornate-comp.component.scss']
})
export class AssGiornateCompComponent extends vrs implements OnInit {

  @Input() comp!: Competizione;
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
      this.getGiornateComp()
    }
  }

  getGiornateComp() {

    this.adminEventi.getGiornateComp(this.comp.id||"")
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
    this.setCannonieriComp(payload)
  }


  setCannonieriComp(payload: any) {


    this.adminEventi.setGiornateComp(payload)
      .subscribe({

        next: (result: any) => {
          this.getGiornateComp()
        },
        error: (error: any) => {
          this.loading_btn = false
          this.alert.error(error);
        }
      })

  }

  onDeleteItem(item: any) {

    this.confirmDialogService.confirmGeneric(() => {
      this.delCannoniereComp(item)
    })
  }


  delCannoniereComp(payload: any) {

    this.adminEventi.delGiornateComp(payload)
      .subscribe({

        next: (result: any) => {
          this.alert.success(SUCCESS_OK);
          this.getGiornateComp()
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }


}