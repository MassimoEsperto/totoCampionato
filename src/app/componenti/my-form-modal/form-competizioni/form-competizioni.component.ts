import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { vrs } from 'src/app/classi/util/global-variables';
import { AdminDatiService } from 'src/servizi/admin/admin-dati.service';
import { AlertService } from 'src/servizi/applicazione/alert.service';
import { MyButton } from '../../my-button/my-button.component';
import { CompetizioneModel } from 'src/app/classi/model/competizione.model';


@Component({
  selector: 'form-competizioni',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MyButton
  ],
  templateUrl: './form-competizioni.component.html',
  styleUrl: './form-competizioni.component.scss'
})
export class FormCompetizioni extends vrs implements OnInit {

  @Input() competizione!: CompetizioneModel;
  @Output() submit = new EventEmitter();
  @ViewChild('closeModal') closeModal!: ElementRef;

  constructor(
    private adminDati: AdminDatiService,
    private alert: AlertService) {
    super();
  }

  ngOnInit() { }

  onCompetizione(comp: CompetizioneModel) {
    this.loading_btn = true
    if (comp.id) {
      this.updCompetizione(comp)
    } else {
      this.setCompetizione(comp)
    }
  }

  updCompetizione(item: CompetizioneModel) {

    this.adminDati.updCompetizione(item)
      .pipe(finalize(() =>
        this.loading_btn = false
      ))
      .subscribe({

        next: (result: any) => {
          this.submit.emit(item)
          this.closeModal.nativeElement.click()
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

  setCompetizione(item: CompetizioneModel) {

    this.adminDati.setCompetizione(item)
      .pipe(finalize(() =>
        this.loading_btn = false
      ))
      .subscribe({

        next: (result: any) => {
          this.submit.emit(item)
          this.closeModal.nativeElement.click()
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

  ngOnDestroy() {

    document.body.removeAttribute("style");

  }

}
