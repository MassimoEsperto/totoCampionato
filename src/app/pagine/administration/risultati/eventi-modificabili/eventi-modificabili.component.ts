import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { SUCCESS_OK } from 'src/app/classi/costanti';
import { vrs } from 'src/app/classi/global-variables';
import { Competizione } from 'src/app/model/Competizione';
import { AdminRisultatiService } from 'src/app/servizi/admin/admin-risultati.service';
import { AlertService } from 'src/app/servizi/applicazione/alert.service';

@Component({
  selector: 'eventi-modificabili',
  templateUrl: './eventi-modificabili.component.html',
  styleUrls: ['./eventi-modificabili.component.scss']
})
export class EventiModificabiliComponent extends vrs implements OnInit {

  eventi: any = [];
  @Input() comp!: Competizione;
  
  constructor(
    private admin: AdminRisultatiService,
    private alert: AlertService) {
    super();
  }

  comboSiNo=["SI","NO"]

  ngOnInit() { }

  ngOnChanges() {
    if (this.comp && this.comp.id) {
      this.getEventiMod(this.comp.id)
    }
  }

  getEventiMod(id: string) {

    this.admin.getEventiMod(id)
      .pipe(finalize(() =>
        this.loading_page = false
      ))
      .subscribe({

        next: (result: any) => {
          this.eventi = result

          this.loading_btn = false;
        },
        error: (error: any) => {
          this.alert.error(error);
        }
      })

  }

  onModEvento(choise:any,item:number){
   
    let payload = {
      "id": item,
      "mod": choise.mod
    }

    this.updModEvento(payload)
  }

  updModEvento(payload: any) {

    this.admin.updEventiMod(payload)
      .pipe(finalize(() =>
        this.getEventiMod(this.comp.id || "")
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

}
