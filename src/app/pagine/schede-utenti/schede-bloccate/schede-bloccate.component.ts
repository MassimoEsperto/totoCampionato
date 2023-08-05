import { Component, OnInit } from '@angular/core';
import { vrs } from 'src/app/classi/global-variables';
import { EventoScheda } from 'src/app/model/EventoScheda';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';
import { PlayerService } from 'src/app/servizi/player/player.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'schede-bloccate',
  templateUrl: './schede-bloccate.component.html',
  styleUrls: ['./schede-bloccate.component.scss']
})
export class SchedeBloccateComponent extends vrs implements OnInit {

  record: any

  constructor(
    private player: PlayerService,
    private alert: AlertService) {
    super();
  }


  scheda_master: Array<EventoScheda> = [];
  schede: any

  play_comp = this.player.getCompetizione()

  ngOnInit() {
    this.loading_table = true
    this.getSchedeUtente()
  }



  onViewItem(item: any) {
    this.record = item
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

  




}
