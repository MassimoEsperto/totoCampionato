import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { SUCCESS_OK } from 'src/app/classi/costanti';
import { vrs } from 'src/app/classi/global-variables';
import { EventoScheda } from 'src/app/model/EventoScheda';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';
import { ConfirmDialogService } from 'src/app/servizi/applicazione/confirm-dialog.service';
import { PlayerService } from 'src/app/servizi/player/player.service';


@Component({
  selector: 'schede-utenti',
  templateUrl: './schede-utenti.component.html',
  styleUrls: ['./schede-utenti.component.scss']
})
export class SchedeUtentiComponent extends vrs implements OnInit {


  constructor(
    private player: PlayerService,
    private confirmDialogService: ConfirmDialogService,
    private alert: AlertService) {
    super();
  }

  
  play_comp = this.player.getCompetizione()

  ngOnInit() {}

 

}
