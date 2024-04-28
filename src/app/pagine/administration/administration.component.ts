import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { vrs } from 'src/app/classi/util/global-variables';
import { MyConfirmDialog } from 'src/app/componenti/my-confirm-dialog/my-confirm-dialog.component';
import { AdminEventiService } from 'src/servizi/admin/admin-eventi.service';
import { AlertService } from 'src/servizi/applicazione/alert.service';
import { CompetizioniComponent } from './dati/competizioni/competizioni.component';
import { GestioneSchedeComponent } from './dati/gestione-schede/gestione-schede.component';
import { SquadreComponent } from './dati/squadre/squadre.component';
import { UtentiComponent } from './dati/utenti/utenti.component';
import { AssSquadreCompComponent } from './eventi/ass-squadre-comp/ass-squadre-comp.component';
import { AssTipiPronosticiComponent } from './eventi/ass-tipi-pronostici/ass-tipi-pronostici.component';
import { SchedaMasterComponent } from './eventi/scheda-master/scheda-master.component';
import { CalendarioComponent } from './risultati/calendario/calendario.component';
import { EventiModificabiliComponent } from './risultati/eventi-modificabili/eventi-modificabili.component';
import { CompetizioneModel } from 'src/app/classi/model/competizione.model';
import { AssGiornateCompComponent } from './eventi/ass-giornate-comp/ass-giornate-comp.component';
import { PAGE } from 'src/environments/costanti';

@Component({
  selector: 'administration',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MyConfirmDialog,
    UtentiComponent,
    SquadreComponent,
    GestioneSchedeComponent,
    CompetizioniComponent,
    AssSquadreCompComponent,
    AssTipiPronosticiComponent,
    AssGiornateCompComponent,
    SchedaMasterComponent,
    CalendarioComponent,
    EventiModificabiliComponent
  ],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.scss'
})
export class AdministrationComponent extends vrs implements OnInit {

  competizione!: CompetizioneModel;
  combo: any;
  tabs: number = 0;
  PAGE = PAGE;

  constructor(
    private adminEventi: AdminEventiService,
    private alert: AlertService) {
    super();
  }

  ngOnInit() {
    this.getCombo()
  }

  selected(item: CompetizioneModel) {
    this.competizione = item;
  }

  tabSelected(item: number) {
    this.tabs = item;
  }

  getCombo() {

    this.adminEventi.getCombo()
      .subscribe({

        next: (result: any) => {
          this.combo = result
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

}
