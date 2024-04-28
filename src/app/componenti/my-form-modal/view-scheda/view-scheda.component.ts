import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { EventoSchedaModel } from 'src/app/classi/model/evento.scheda.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyButton } from '../../my-button/my-button.component';
import { vrs } from 'src/app/classi/util/global-variables';
import { AlertService } from 'src/servizi/applicazione/alert.service';
import { PlayerService } from 'src/servizi/player/player.service';

@Component({
  selector: 'view-scheda',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MyButton
  ],
  templateUrl: './view-scheda.component.html',
  styleUrl: './view-scheda.component.scss'
})
export class ViewScheda extends vrs {

  constructor(
    private player: PlayerService,
    private alert: AlertService) {
    super();
  }

  @Input() record!: any;
  scheda_master: Array<EventoSchedaModel> = [];


  ngOnChanges() {
    this.scheda_master = []
    this.loading_page = true
    if (this.record)
      this.getDettaglioScheda(this.record)
  }

  getDettaglioScheda(input: any) {

    this.player.getDettaglioScheda(input.id_giornata,input.id_schedina)
      .pipe(finalize(() =>
        this.loading_page = false
      ))
      .subscribe({

        next: (result: any) => {
          this.scheda_master = result
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

  goToLink(url: string) {
    let id_scheda = this.record.id;
    let utente = this.record.utente;
    let id_giornata = this.record.id_giornata;
    let id_comp = this.player.getCompetizione().id;

    window.open(url + "?id_scheda=" + id_scheda + "&id_giornata=" + id_giornata+ "&utente=" + utente+ "&id_comp=" + id_comp, "_blank");
  }


  ngOnDestroy() {

    document.body.removeAttribute("style");

  }

}
