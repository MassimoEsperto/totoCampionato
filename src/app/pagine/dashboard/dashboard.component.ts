import { Component, OnInit } from '@angular/core';
import { Competizione } from 'src/app/model/Competizione';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';
import { PlayerService } from 'src/app/servizi/player/player.service';
import { vrs } from './../../classi/global-variables';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends vrs implements OnInit {

  tabs: any;
  tab: any;
  play_comp = this.player.getCompetizione()
  info: any;
  record: any

  constructor(private player: PlayerService,
    private alert: AlertService) {
    super();
  }


  ngOnInit() {
    this.getInfo()
  }

  onViewItem(item: any) {
    this.record = item
  }


  selectedTab(e: any) {
    this.tab = e
  }

  selezionaCompetizione() {
    if (this.tab) {
      let comp = new Competizione()
      comp.set(this.tab)
      this.player.setCompetizione(comp)
    }

  }

 

  getInfo() {

    this.loading_page = true

    this.player.getInfo()
    .pipe(finalize(() =>
    this.loading_page = false
  ))
      .subscribe({
       
        next: (result: any) => {
          this.tabs = result.competizioni
          this.info = result
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

  ngOnDestroy() {

    document.body.removeAttribute("style");

  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
