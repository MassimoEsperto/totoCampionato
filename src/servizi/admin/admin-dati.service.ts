import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpSenderService } from '../autenticazione/http-sender.service';
import { Observable } from 'rxjs';
import { ADMIN_SERVICE, SERVICE_TYPE } from 'src/environments/costanti';
import { UtenteModel } from 'src/app/classi/model/utente.model';
import { CompetizioneModel } from 'src/app/classi/model/competizione.model';


@Injectable({
  providedIn: 'root'
})
export class AdminDatiService extends HttpSenderService {

  constructor(private http: HttpClient) {
    super(SERVICE_TYPE.ADMIN.DATI, http);
  }

  /*UTENTI */
  getUtenti(): Observable<UtenteModel> {
    return this.getAuth(ADMIN_SERVICE.DATI.GET_UTENTI)
  }

  updUtente(payload: any) {
    return this.putAuth(ADMIN_SERVICE.DATI.UPD_UTENTE, payload)
  }

  delUtente(payload: any) {
    return this.postAuth(ADMIN_SERVICE.DATI.DEL_UTENTE, payload)
  }

  /*SUADRE */
  getSquadre(): Observable<any> {
    return this.getAuth(ADMIN_SERVICE.DATI.GET_SQUADRE)
  }

  setSquadra(payload: any) {
    return this.postAuth(ADMIN_SERVICE.DATI.SET_SQUADRA, payload)
  }

  delSquadra(payload: any) {
    return this.postAuth(ADMIN_SERVICE.DATI.DEL_SQUADRA, payload)
  }


  /*CANNONIERI */
  getCannonieri(): Observable<any> {
    return this.getAuth(ADMIN_SERVICE.DATI.GET_CANNONIERI)
  }

  setCannoniere(payload: any) {
    return this.postAuth(ADMIN_SERVICE.DATI.SET_CANNONIERE, payload)
  }

  delCannoniere(payload: any) {
    return this.postAuth(ADMIN_SERVICE.DATI.DEL_CANNONIERE, payload)
  }



  /*COMPETIZIONI */
  getCompetizioni(): Observable<CompetizioneModel> {
    return this.getAuth(ADMIN_SERVICE.DATI.GET_COMPETIZIONI)
  }

  setCompetizione(payload: any) {
    return this.postAuth(ADMIN_SERVICE.DATI.SET_COMPETIZIONE, payload)
  }

  updCompetizione(payload: any) {
    return this.postAuth(ADMIN_SERVICE.DATI.UPD_COMPETIZIONE, payload)
  }



  /*SCHEDE */
  getSchede(): Observable<any> {
    return this.getAuth(ADMIN_SERVICE.DATI.GET_SCHEDE)
  }

  delScheda(payload: any) {
    return this.postAuth(ADMIN_SERVICE.DATI.DEL_SCHEDA, payload)
  }


}

