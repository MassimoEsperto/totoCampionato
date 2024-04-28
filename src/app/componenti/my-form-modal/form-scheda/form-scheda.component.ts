import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { EventoSchedaModel } from 'src/app/classi/model/evento.scheda.model';
import { vrs } from 'src/app/classi/util/global-variables';
import { AlertService } from 'src/servizi/applicazione/alert.service';
import { PlayerService } from 'src/servizi/player/player.service';
import { MyButton } from '../../my-button/my-button.component';

@Component({
  selector: 'form-scheda',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MyButton
  ],
  templateUrl: './form-scheda.component.html',
  styleUrl: './form-scheda.component.scss'
})
export class FormScheda extends vrs implements OnInit {


  @Input() combo!: any;
  @Input() scheda_selezionata: number = 0;
  @ViewChild('closeModal') closeModal!: ElementRef;
  @Input() scheda_master: Array<EventoSchedaModel> = [];
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


  onPlayScheda(input: Array<EventoSchedaModel>) {

    this.loading_btn = true

    this.setDettaglioScheda(input)

  }



  setDettaglioScheda(input: Array<EventoSchedaModel>) {

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


  cambiaGruppo(gruppo: any, evento: EventoSchedaModel) {

    let nuovoGruppo = this.combo.partite.find((i: { descrizione: string }) => i.descrizione == gruppo).gruppo

    evento.gruppo = nuovoGruppo

  }


  ngOnDestroy() {

    document.body.removeAttribute("style");

  }


}
