import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { SUCCESS_OK } from 'src/app/classi/costanti';
import { vrs } from 'src/app/classi/global-variables';
import { EventoScheda } from 'src/app/model/EventoScheda';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';
import { ConfirmDialogService } from 'src/app/servizi/applicazione/confirm-dialog.service';
import { UtilService } from 'src/app/servizi/applicazione/util.service';
import { PlayerService } from 'src/app/servizi/player/player.service';


@Component({
  selector: 'schede-utenti',
  templateUrl: './schede-utenti.component.html',
  styleUrls: ['./schede-utenti.component.scss']
})
export class SchedeUtentiComponent extends vrs implements OnInit {

 constructor(

    private util: UtilService,
    private player: PlayerService,
    private confirmDialogService: ConfirmDialogService,
    private alert: AlertService) {
    super();
  }

  comboScheda: any
  scheda_master: Array<EventoScheda> = [];
  schede: any
  scheda_selezionata: number = 0
  play_comp = this.player.getCompetizione()
  record: any

  ngOnInit() {
    this.loading_page = true
    this.loading_table = true

   // this.getSchedaMaster()
    this.getComboScheda()
    this.getSchedeUtente()
  }


 
  onViewItem(item: any) {
    this.record = item
  }

  onUpdate(item: any) {
    this.scheda_selezionata = item.id
    this.scheda_master = []
    this.getDettaglioScheda(item.id_giornata,item.id)
  }

  onInsert(ele:number) {
    this.scheda_selezionata = 0
    this.scheda_master = []
    this.getSchedaMaster(ele)
  }



  getSchedaMaster(id_giornata:number) {

    this.player.getSchedaMaster(id_giornata)
      .pipe(finalize(() =>
        this.loading_page = this.comboScheda ? false : true
      ))
      .subscribe({

        next: (result: any) => {
          this.scheda_master = result
          this.comboScheda.id_giornata = id_giornata
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

  getComboScheda() {

    this.player.getComboScheda()
      .pipe(finalize(() =>
        this.loading_page = this.scheda_master ? false : true
      ))
      .subscribe({

        next: (result: any) => {
          this.comboScheda = result
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

  getSchedeUtenteReload(msg:string) {
    if(!msg){
    this.alert.success(SUCCESS_OK)
    this.getSchedeUtente()
    }else{
      this.alert.error(msg)
    }
  }

  getSchedeUtente() {

    this.player.getSchedeUtente()
      .pipe(finalize(() =>
        this.loading_table = false
      ))
      .subscribe({

        next: (result: any) => {
          this.schede = result
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

  getDettaglioScheda(id_giornata: number, id_schedina: number) {

    this.player.getDettaglioScheda(id_giornata,id_schedina)
      .subscribe({

        next: (result: any) => {
          this.scheda_master = result
          this.comboScheda.id_giornata = id_giornata
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }




}

