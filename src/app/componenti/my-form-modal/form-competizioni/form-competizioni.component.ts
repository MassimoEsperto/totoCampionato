import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { vrs } from 'src/app/classi/global-variables';
import { Competizione } from 'src/app/model/Competizione';
import { AdminDatiService } from 'src/app/servizi/admin/admin-dati.service';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';

@Component({
  selector: 'form-competizioni',
  templateUrl: './form-competizioni.component.html',
  styleUrls: ['./form-competizioni.component.scss']
})
export class FormCompetizioni extends vrs implements OnInit {

  @Input() competizione!: Competizione;
  @Output() submit = new EventEmitter();
  @ViewChild('closeModal') closeModal!: ElementRef;

  constructor(
    private adminDati: AdminDatiService,
    private alert: AlertService) {
    super();
  }

  ngOnInit() { }

  onCompetizione(comp: Competizione) {
    this.loading_btn = true
    if (comp.id) {
      this.updCompetizione(comp)
    } else {
      this.setCompetizione(comp)
    }
  }

  updCompetizione(item: Competizione) {

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

  setCompetizione(item: Competizione) {

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
