import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { CompetizioneModel } from 'src/app/classi/model/competizione.model';
import { vrs } from 'src/app/classi/util/global-variables';
import { MyButton } from 'src/app/componenti/my-button/my-button.component';
import { SUCCESS_OK } from 'src/environments/env';
import { AdminEventiService } from 'src/servizi/admin/admin-eventi.service';
import { AlertService } from 'src/servizi/applicazione/alert.service';
import { ConfirmDialogService } from 'src/servizi/applicazione/confirm-dialog.service';


@Component({
  selector: 'ass-tipi-pronostici',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MyButton
  ],
  templateUrl: './ass-tipi-pronostici.component.html',
  styleUrl: './ass-tipi-pronostici.component.scss'
})
export class AssTipiPronosticiComponent extends vrs implements OnInit {

  @Input() comp!: CompetizioneModel;
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