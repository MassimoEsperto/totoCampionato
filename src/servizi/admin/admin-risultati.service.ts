import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpSenderService } from '../autenticazione/http-sender.service';
import { ADMIN_SERVICE, SERVICE_TYPE } from 'src/environments/costanti';


@Injectable({
  providedIn: 'root'
})
export class AdminRisultatiService extends HttpSenderService {

  constructor(private http: HttpClient) {
    super(SERVICE_TYPE.ADMIN.RISULTATI, http);
  }

  getRisultatiPossibili(input: string) {
    const params = new HttpParams().set('id_comp', input);
    return this.getAuth(ADMIN_SERVICE.RISULTATI.GET_RISULTATI_POSSIBILI, params)
  }

  getSchedaRisultati(input: string) {
    const params = new HttpParams().set('id_comp', input);
    return this.getAuth(ADMIN_SERVICE.RISULTATI.GET_SCHEDA_RISULTATI, params)
  }

  getSchedeConcluse(input: string) {
    const params = new HttpParams().set('id_comp', input);
    return this.getAuth(ADMIN_SERVICE.RISULTATI.GET_SCHEDE_CONCLUSE, params)
  }



  //set risultati
  setRisultatoPartita(payload: any): Observable<any> {
    return this.postAuth(ADMIN_SERVICE.RISULTATI.SET_RISULTATO_PARTITA, payload)
  }

  setRisultatoEliminatorie(payload: any): Observable<any> {
    return this.postAuth(ADMIN_SERVICE.RISULTATI.SET_RISULTATO_ELIMINATORIE, payload)
  }

  setRisultatoAntepost(payload: any): Observable<any> {
    return this.postAuth(ADMIN_SERVICE.RISULTATI.SET_RISULTATO_ANTEPOST, payload)
  }

  setRisultatoGironi(payload: any): Observable<any> {
    return this.postAuth(ADMIN_SERVICE.RISULTATI.SET_RISULTATO_GIRONI, payload)
  }



  //modificabile
  getEventiMod(input: string) {
    const params = new HttpParams().set('id_comp', input);
    return this.getAuth(ADMIN_SERVICE.RISULTATI.GET_EVENTI_MOD, params)
  }

  updEventiMod(payload: any) {
    return this.putAuth(ADMIN_SERVICE.RISULTATI.UPD_EVENTI_MOD, payload)
  }

  //set risultati
  setSchedeConcluse(payload: any): Observable<any> {
    return this.postAuth(ADMIN_SERVICE.RISULTATI.SET_SCHEDE_CONCLUSE, payload)
  }



  getGiornatePossibili(input: string) {
    const params = new HttpParams().set('id_comp', input);
    return this.getAuth(ADMIN_SERVICE.RISULTATI.GET_GIORNATE_POSSIBILI, params)
  }

  getSchedaEventi(input: number) {
    const params = new HttpParams().set('id_giornata', input);
    return this.getAuth(ADMIN_SERVICE.RISULTATI.GET_EVENTI, params)
  }

  //set risultati
  updEvento(payload: any) {
    return this.putAuth(ADMIN_SERVICE.RISULTATI.UPD_EVENTO, payload)
  }

  updDataEvento(payload: any) {
    return this.putAuth(ADMIN_SERVICE.RISULTATI.UPD_DATA_EVENTO, payload)
  }

  updDataGiornata(payload: any) {
    return this.putAuth(ADMIN_SERVICE.RISULTATI.UPD_DATA_GIORNATA, payload)
  }





}
