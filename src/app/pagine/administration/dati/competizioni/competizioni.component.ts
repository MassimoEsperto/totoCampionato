import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { SUCCESS_OK } from 'src/app/classi/costanti';
import { vrs } from 'src/app/classi/global-variables';
import { Competizione } from 'src/app/model/Competizione';
import { AdminDatiService } from 'src/app/servizi/admin/admin-dati.service';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';
import { ConfirmDialogService } from 'src/app/servizi/applicazione/confirm-dialog.service';

@Component({
  selector: 'competizioni',
  templateUrl: './competizioni.component.html',
  styleUrls: ['./competizioni.component.scss']
})
export class CompetizioniComponent extends vrs implements OnInit {

  competizioni: any = []
  competizione = new Competizione();
  @Output() selected = new EventEmitter();
  sigla: string = "";

  constructor(
    private adminDati: AdminDatiService,
    private confirmDialogService: ConfirmDialogService,
    private alert: AlertService) {
    super();
  }

  ngOnInit() {
    this.getCompetizioni()
  }

  viewSiNo(item: any) {
    return item == this.SI_NO.SI_V ? this.SI_NO.SI_S : this.SI_NO.NO_S
  }

  onUpdate(item: Competizione) {
    this.competizione.set(item);
  }

  onAdd() {
    this.competizione.reset();
  }

  onSeleziona(item: Competizione) {
    if (item && item.sigla) {
      this.sigla = item.sigla;
      this.selected.emit(item);
      this.alert.success("Selezionata comp: " + item.nome)
    }

  }

  reloadComp(item: Competizione) {
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
