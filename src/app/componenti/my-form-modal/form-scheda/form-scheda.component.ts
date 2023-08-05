import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { vrs } from 'src/app/classi/global-variables';
import { EventoScheda } from 'src/app/model/EventoScheda';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';
import { PlayerService } from 'src/app/servizi/player/player.service';

@Component({
  selector: 'form-scheda',
  templateUrl: './form-scheda.component.html',
  styleUrls: ['./form-scheda.component.scss']
})
export class FormScheda extends vrs implements OnInit {


  @Input() combo!: any;
  @Input() scheda_selezionata: number = 0;
  @ViewChild('closeModal') closeModal!: ElementRef;
  @Input() scheda_master: Array<EventoScheda> = [];
  @Output() submit = new EventEmitter();
  play_comp = this.player.getCompetizione()


  constructor(
    private player: PlayerService,
    private alert: AlertService) {
    super();
  }

  ngOnInit() { }

  ngOnChanges() {

  }


  onPlayScheda(input: Array<EventoScheda>) {

    this.loading_btn = true

    this.setDettaglioScheda(input)

  }



  setDettaglioScheda(input: Array<EventoScheda>) {

    this.player.setDettaglioScheda(input, this.combo.id_giornata)
      .pipe(finalize(() =>
        this.loading_btn = false
      ))
      .subscribe({

        next: (result: any) => {
          this.closeModal.nativeElement.click()
          this.submit.emit()
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }


  cambiaGruppo(gruppo: any, evento: EventoScheda) {

    let nuovoGruppo = this.combo.partite.find((i: { descrizione: string }) => i.descrizione == gruppo).gruppo

    evento.gruppo = nuovoGruppo

  }


  ngOnDestroy() {

    document.body.removeAttribute("style");

  }


}
