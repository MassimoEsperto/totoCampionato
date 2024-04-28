import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpSenderService } from '../autenticazione/http-sender.service';
import { ADMIN_SERVICE, SERVICE_TYPE } from 'src/environments/costanti';


@Injectable({
  providedIn: 'root'
})
export class AdminEventiService extends HttpSenderService {

  constructor(private http: HttpClient) {
    super(SERVICE_TYPE.ADMIN.EVENTI, http);
  }

  getCombo(): Observable<any> {
    return this.getAuth(ADMIN_SERVICE.EVENTI.GET_COMBO)
  }


  getTipiPronostici(input: string) {
    const params = new HttpParams().set('id_comp', input);
    return this.getAuth(ADMIN_SERVICE.EVENTI.GET_TIPI_PRO_BY_COMP, params)
  }

  setTipiPronosticiComp(payload: any) {
    return this.postAuth(ADMIN_SERVICE.EVENTI.SET_TIPI_PRO_BY_COMP, payload)
  }

  delTipiPronosticiComp(payload: any) {
    return this.postAuth(ADMIN_SERVICE.EVENTI.DEL_TIPI_PRO_BY_COMP, payload)
  }

  getCannonieriComp(input: string) {
    const params = new HttpParams().set('id_comp', input);
    return this.getAuth(ADMIN_SERVICE.EVENTI.GET_CANNONIERI_COMP, params)
  }

  setCannonieriComp(payload: any) {
    return this.postAuth(ADMIN_SERVICE.EVENTI.SET_CANNONIERE_COMP, payload)
  }

  delCannoniereComp(payload: any) {
    return this.postAuth(ADMIN_SERVICE.EVENTI.DEL_CANNONIERE_COMP, payload)
  }


  getSquadreComp(input: string) {
    const params = new HttpParams().set('id_comp', input);
    return this.getAuth(ADMIN_SERVICE.EVENTI.GET_SQUADRE_COMP, params)
  }

  setSquadraComp(payload: any) {
    return this.postAuth(ADMIN_SERVICE.EVENTI.SET_SQUADRA_COMP, payload)
  }

  delSquadraComp(payload: any) {
    return this.postAuth(ADMIN_SERVICE.EVENTI.DEL_SQUADRA_COMP, payload)
  }

  getSchedaMaster(id_comp: string,id_giornata: number) {
    const params = new HttpParams().set('id_comp', id_comp).set('id_giornata', id_giornata);
    return this.getAuth(ADMIN_SERVICE.EVENTI.GET_SCHEDA_MASTER, params)
  }

  setEventMaster(payload: any) {
    return this.postAuth(ADMIN_SERVICE.EVENTI.SET_EVENT_MASTER, payload)
  }

  delEventMaster(payload: any) {
    return this.postAuth(ADMIN_SERVICE.EVENTI.DEL_EVENT_MASTER, payload)
  }

  getGiornateComp(input: string) {
    const params = new HttpParams().set('id_comp', input);
    return this.getAuth(ADMIN_SERVICE.EVENTI.GET_GIORNATE_COMP, params)
  }

  setGiornateComp(payload: any) {
    return this.postAuth(ADMIN_SERVICE.EVENTI.SET_GIORNATE_COMP, payload)
  }

  delGiornateComp(payload: any) {
    return this.postAuth(ADMIN_SERVICE.EVENTI.DEL_GIORNATE_COMP, payload)
  }




}
