import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { EventoSchedaModel } from 'src/app/classi/model/evento.scheda.model';
import { vrs } from 'src/app/classi/util/global-variables';
import { FormScheda } from 'src/app/componenti/my-form-modal/form-scheda/form-scheda.component';
import { ViewScheda } from 'src/app/componenti/my-form-modal/view-scheda/view-scheda.component';
import { MyPagination } from 'src/app/componenti/my-pagination/my-pagination.component';
import { SUCCESS_OK } from 'src/environments/env';
import { AlertService } from 'src/servizi/applicazione/alert.service';
import { PlayerService } from 'src/servizi/player/player.service';



@Component({
  selector: 'schede-utenti',
  standalone: true,
  imports: [
    CommonModule,
    ViewScheda,
    FormScheda,
    MyPagination
  ],
  templateUrl: './schede-utenti.component.html',
  styleUrl: './schede-utenti.component.scss'
})
export class SchedeUtentiComponent extends vrs implements OnInit {

 constructor(
    private player: PlayerService,
    private alert: AlertService) {
    super();
  }

  comboScheda: any
  scheda_master: Array<EventoSchedaModel> = [];
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

