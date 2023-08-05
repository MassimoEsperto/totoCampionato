import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { SUCCESS_OK } from 'src/app/classi/costanti';
import { vrs } from 'src/app/classi/global-variables';
import { Competizione } from 'src/app/model/Competizione';
import { AdminEventiService } from 'src/app/servizi/admin/admin-eventi.service';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';
import { ConfirmDialogService } from 'src/app/servizi/applicazione/confirm-dialog.service';


@Component({
  selector: 'ass-tipi-pronostici',
  templateUrl: './ass-tipi-pronostici.component.html',
  styleUrls: ['./ass-tipi-pronostici.component.scss']
})
export class AssTipiPronosticiComponent extends vrs implements OnInit {

  @Input() comp!: Competizione;
  @Input() combo: any;
  eventi: any

  constructor(
    private adminEventi: AdminEventiService,
    private confirmDialogService: ConfirmDialogService,
    private alert: AlertService) {
    super();
  }

  ngOnInit() { }

  ngOnChanges() {

    if (this.comp && this.comp.id) {
      this.getTipiPronostici()
    }
  }

  getTipiPronostici() {

    this.adminEventi.getTipiPronostici(this.comp.id || "0")
      .subscribe({

        next: (result: any) => {
          this.eventi = result
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

  onSetEventoPronostico(payload: any) {

    payload.id_comp = this.comp.id
    this.setEventoPronostico(payload)
    
  }

  setEventoPronostico(payload: any) {

    this.adminEventi.setTipiPronosticiComp(payload)
      .pipe(finalize(() =>
        this.loading_btn = false
      ))
      .subscribe({

        next: () => {
          this.alert.success(SUCCESS_OK);
          this.getTipiPronostici()
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }


  onDeleteItem(item: any) {

    this.confirmDialogService.confirmGeneric(() => {
      this.delTipiPronosticiComp(item)
    })
  }


  delTipiPronosticiComp(payload: any) {

    this.adminEventi.delTipiPronosticiComp(payload)
      .subscribe({

        next: (result: any) => {
          this.alert.success(SUCCESS_OK);
          this.getTipiPronostici()
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }
}