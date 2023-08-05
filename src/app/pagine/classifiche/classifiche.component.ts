import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { vrs } from 'src/app/classi/global-variables';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';
import { PlayerService } from 'src/app/servizi/player/player.service';

@Component({
  selector: 'classifiche',
  templateUrl: './classifiche.component.html',
  styleUrls: ['./classifiche.component.scss']
})
export class ClassificheComponent extends vrs implements OnInit {

  schede: any
  record: any

  constructor(
    private player: PlayerService,
    private alert: AlertService) {
    super();
  }
  ngOnInit() {
    this.getClassifica()
  }

  onViewItem(item: any) {
    this.record = item
  }

  getClassifica() {

    this.loading_table = true

    this.player.getClassificaGenerale()
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

  goToLink(url: string) {
    let id_comp=this.player.getCompetizioneHeader();
    let sigla=this.player.getCompetizione().sigla;
   
    window.open(url+"?id_comp="+id_comp+"&sigla="+sigla, "_blank");
  }

  

}
