import { Component, OnInit } from '@angular/core';
import { vrs } from 'src/app/classi/global-variables';
import { Competizione } from 'src/app/model/Competizione';
import { AdminEventiService } from 'src/app/servizi/admin/admin-eventi.service';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';

@Component({
  selector: 'administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent extends vrs implements OnInit {

  competizione!: Competizione;
  combo: any;
  tabs: number = 0;

  constructor(
    private adminEventi: AdminEventiService,
    private alert: AlertService) {
    super();
  }

  ngOnInit() {
    this.getCombo()
  }

  selected(item: Competizione) {
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
