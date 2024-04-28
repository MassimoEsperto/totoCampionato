import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { CompetizioneModel } from 'src/app/classi/model/competizione.model';
import { vrs } from 'src/app/classi/util/global-variables';
import { ViewScheda } from 'src/app/componenti/my-form-modal/view-scheda/view-scheda.component';
import { MyIcona } from 'src/app/componenti/my-icona/my-icona.component';
import { MySpinner } from 'src/app/componenti/my-spinner/my-spinner.component';
import { MyTabScrollable } from 'src/app/componenti/my-tab-scrollable/my-tab-scrollable.component';
import { AlertService } from 'src/servizi/applicazione/alert.service';
import { PlayerService } from 'src/servizi/player/player.service';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    MySpinner,
    CommonModule,
    MyTabScrollable,
    MyIcona,
    ViewScheda
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends vrs implements OnInit {

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
      let comp = new CompetizioneModel()
      comp.set(this.tab)
      this.player.selCompetizione(comp)
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
