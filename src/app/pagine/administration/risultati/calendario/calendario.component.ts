import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { CompetizioneModel } from 'src/app/classi/model/competizione.model';
import { vrs } from 'src/app/classi/util/global-variables';
import { MyButton } from 'src/app/componenti/my-button/my-button.component';
import { SUCCESS_OK } from 'src/environments/env';
import { AdminRisultatiService } from 'src/servizi/admin/admin-risultati.service';
import { AlertService } from 'src/servizi/applicazione/alert.service';

@Component({
  selector: 'calendario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MyButton
  ],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})
export class CalendarioComponent extends vrs implements OnInit {

  opzioni: any
  scheda_risultati: any = [];
  @Input() comp!: CompetizioneModel;

  id_giornata: number = 0
  giornate: any = []
  giornata: any


  constructor(
    private admin: AdminRisultatiService,
    private alert: AlertService) {
    super();
  }


  ngOnInit() { }

  ngOnChanges() {
    if (this.comp && this.comp.id) {
      this.getGiornatePossibili()
      this.getRisultatiPossibili(this.comp.id)
      if (this.id_giornata != 0) {
        this.getSchedaEventi(this.id_giornata)
      }
    }

  }

  onChangeTipo(event: any) {
    this.id_giornata = Number(event.target.value) || 0
    this.giornata = this.giornate.find((i: { id: number }) => i.id == this.id_giornata)
    this.getSchedaEventi(this.id_giornata)
  }


  getGiornatePossibili() {

    this.admin.getGiornatePossibili(this.comp.id || "")
      .pipe(finalize(() =>
        this.loading_btn = false
      ))
      .subscribe({

        next: (result: any) => {
          this.giornate = result

        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }


  onUpdatePartita(item: any, input: any) {

    let payload = {
      "id_evento": input.id,
      "risultato": item.risultato,
      "data_partita": item.data_partita || input.data_partita,
      "pronostico": this.opzioni.find((i: { view: string }) => i.view == item.risultato)
    }
if(item.risultato)
    this.setRisultatoPartita(payload)
  else
  this.setDataPartita(payload)
  }

  onUpdateGiornata(item: any) {
    let payload = {
      "id_giornata": this.id_giornata,
      "data_giornata": item.data_giornata
    }

    this.setDataGiornata(payload)
  }


  setRisultatoPartita(payload: any) {

    this.admin.updEvento(payload)
      .pipe(finalize(() =>
        this.getSchedaEventi(this.id_giornata)
      ))
      .subscribe({

        next: (result: any) => {
          this.alert.success(SUCCESS_OK);
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

  setDataPartita(payload: any) {

    this.admin.updDataEvento(payload)
      .pipe(finalize(() =>
        this.getSchedaEventi(this.id_giornata)
      ))
      .subscribe({

        next: (result: any) => {
          this.alert.success(SUCCESS_OK);
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

  setDataGiornata(payload: any) {

    this.admin.updDataGiornata(payload)
      .pipe(finalize(() =>
        this.loading_btn = false
      ))
      .subscribe({

        next: (result: any) => {
          this.alert.success(SUCCESS_OK);
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }




  getSchedaEventi(id: number) {

    this.admin.getSchedaEventi(id)
      .pipe(finalize(() =>
        this.loading_page = false
      ))
      .subscribe({

        next: (result: any) => {
          this.scheda_risultati = result

          this.loading_btn = false;
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

  getRisultatiPossibili(id: string) {

    this.admin.getRisultatiPossibili(id)
      .pipe(finalize(() =>
        this.loading_page = false
      ))
      .subscribe({

        next: (result: any) => {
          this.opzioni = result

        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }


}
