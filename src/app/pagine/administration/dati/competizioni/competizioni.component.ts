import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { CompetizioneModel } from 'src/app/classi/model/competizione.model';
import { vrs } from 'src/app/classi/util/global-variables';
import { MyButton } from 'src/app/componenti/my-button/my-button.component';
import { FormCompetizioni } from 'src/app/componenti/my-form-modal/form-competizioni/form-competizioni.component';
import { SUCCESS_OK } from 'src/environments/env';
import { AdminDatiService } from 'src/servizi/admin/admin-dati.service';
import { AlertService } from 'src/servizi/applicazione/alert.service';

@Component({
  selector: 'competizioni',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MyButton,
    FormCompetizioni
  ],
  templateUrl: './competizioni.component.html',
  styleUrl: './competizioni.component.scss'
})
export class CompetizioniComponent extends vrs implements OnInit {

  competizioni: any = []
  competizione = new CompetizioneModel();
  @Output() selected = new EventEmitter();
  sigla: string = "";

  constructor(
    private adminDati: AdminDatiService,
    private alert: AlertService) {
    super();
  }

  ngOnInit() {
    this.getCompetizioni()
  }

  viewSiNo(item: any) {
    return item == this.SI_NO.SI_V ? this.SI_NO.SI_S : this.SI_NO.NO_S
  }

  onUpdate(item: CompetizioneModel) {
    this.competizione.set(item);
  }

  onAdd() {
    this.competizione.reset();
  }

  onSeleziona(item: CompetizioneModel) {
    if (item && item.sigla) {
      this.sigla = item.sigla;
      this.selected.emit(item);
      this.alert.success("Selezionata comp: " + item.nome)
    }

  }

  reloadComp(item: CompetizioneModel) {
    this.getCompetizioni()
    this.alert.success(SUCCESS_OK);
    if (item.id == this.competizione.id)
      this.selected.emit(item);
  }


  getCompetizioni() {

    this.adminDati.getCompetizioni()
      .pipe(finalize(() =>
        this.loading_btn = false
      ))
      .subscribe({

        next: (result: any) => {
          this.competizioni = result
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }


}
