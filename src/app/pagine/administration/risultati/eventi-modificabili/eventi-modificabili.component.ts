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
  selector: 'eventi-modificabili',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MyButton
  ],
  templateUrl: './eventi-modificabili.component.html',
  styleUrl: './eventi-modificabili.component.scss'
})
export class EventiModificabiliComponent extends vrs implements OnInit {

  eventi: any = [];
  @Input() comp!: CompetizioneModel;
  
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
