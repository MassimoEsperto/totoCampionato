import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { SUCCESS_OK } from 'src/app/classi/costanti';
import { vrs } from 'src/app/classi/global-variables';
import { Competizione } from 'src/app/model/Competizione';
import { AdminEventiService } from 'src/app/servizi/admin/admin-eventi.service';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';
import { ConfirmDialogService } from 'src/app/servizi/applicazione/confirm-dialog.service';

@Component({
  selector: 'scheda-master',
  templateUrl: './scheda-master.component.html',
  styleUrls: ['./scheda-master.component.scss']
})
export class SchedaMasterComponent extends vrs implements OnInit {

  @Input() comp!: Competizione;
  @Input() combo: any;

  id_giornata: number = 0
  squadre: any = []
  master: any = []
  giornate: any =[]



  constructor(
    private adminEventi: AdminEventiService,
    private confirmDialogService: ConfirmDialogService,
    private alert: AlertService) {
    super();
  }

  ngOnInit() { }

  ngOnChanges() {


    if (this.comp && this.comp.id) {
      this.getGiornateComp()
      if(this.id_giornata != 0){
      this.getSquadreComp(this.comp.id)
      this.getSchedaMaster()
      }
    }
  }

  getGiornateComp() {

    this.adminEventi.getGiornateComp(this.comp.id||"")
      .pipe(finalize(() =>
        this.loading_btn = false
      ))
      .subscribe({

        next: (result: any) => {
          this.giornate = result.compresi
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }


  onChangeTipo(event: any) {
    this.id_giornata = Number(event.target.value) || 0
    this.getSquadreComp(this.comp.id ||"0")
    this.getSchedaMaster()
  }

 

  onSetEvento(e: any) {

    let partita = e.squadra_casa.descrizione + "-" + e.squadra_trasferta.descrizione;

    let payload = {
      id_giornata: this.id_giornata,
      view: partita,
      data_partita:e.data_partita
    }

    this.setEventMaster(payload)
  }

  getSquadreComp(input: string) {

    this.adminEventi.getSquadreComp(input)
      .pipe(finalize(() =>
        this.loading_btn = false
      ))
      .subscribe({

        next: (result: any) => {
          this.squadre = result.compresi
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }


  getSchedaMaster() {

    this.adminEventi.getSchedaMaster(this.comp.id || "0",this.id_giornata)
      .pipe(finalize(() =>
        this.loading_btn = false
      ))
      .subscribe({

        next: (result: any) => {
          this.master = result
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

  setEventMaster(payload: any) {

    this.adminEventi.setEventMaster(payload)
      .subscribe({

        next: (result: any) => {
          this.getSchedaMaster()

        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

  onDeleteItem(item: any) {

    this.confirmDialogService.confirmGeneric(() => {
      this.delEventMaster(item)
    })
  }


  delEventMaster(payload: any) {

    this.adminEventi.delEventMaster(payload)
      .subscribe({

        next: (result: any) => {
          this.alert.success(SUCCESS_OK);
          this.getSchedaMaster()
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }


}