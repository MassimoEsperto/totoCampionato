import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpSenderService } from '../autenticazione/http-sender.service';
import { PLAYER_SERVICE, SERVICE_TYPE } from 'src/environments/costanti';

@Injectable({
  providedIn: 'root'
})
export class PlayerService extends HttpSenderService {

  constructor(private http: HttpClient, private route: Router) {
    super(SERVICE_TYPE.PLAYER, http);
  }


  getSchedaMaster(id_giornata: number): Observable<any> {
    const params = new HttpParams().set('id_giornata', id_giornata);
    return this.getAuth(PLAYER_SERVICE.GET_SCHEDA_MASTER_UTENTE,params)
  }

  getSchedaRandom() {
    return this.getAuth(PLAYER_SERVICE.GET_SCHEDA_RANDOM)
  }

  getComboScheda() {
    return this.getAuth(PLAYER_SERVICE.GET_COMBO_SCHEDA)
  }

  getInfo() {
    return this.getAuth(PLAYER_SERVICE.GET_INFO_HOME)
  }

  setDettaglioScheda(scheda: any, id_giornata: number): Observable<any> {
    let payload = { scheda: scheda, id_giornata: id_giornata }
    return this.postAuth(PLAYER_SERVICE.SET_DETTAGLIO_SCHEDA, payload)
  }

  updDettaglioScheda(scheda: any): Observable<any> {
    let payload = { scheda: scheda }
    return this.putAuth(PLAYER_SERVICE.UPD_DETTAGLIO_SCHEDA, payload)
  }

  copyDettaglioScheda(id_scheda: number): Observable<any> {
    let payload = { id_scheda: id_scheda }
    return this.postAuth(PLAYER_SERVICE.COPY_DETTAGLIO_SCHEDA, payload)
  }

  getDettaglioScheda(id_giornata: number, id_schedina: number): Observable<any> {
    const params = new HttpParams().set('id_giornata', id_giornata).set('id_schedina', id_schedina);
    return this.getAuth(PLAYER_SERVICE.GET_DETTAGLIO_SCHEDA, params)
  }

  getSchedeUtente() {
    return this.getAuth(PLAYER_SERVICE.GET_SCHEDE_UTENTE)
  }

  getClassifica() {
    return this.getAuth(PLAYER_SERVICE.GET_CLASSIFICA)
  }

  delDettaglioScheda(id_scheda: number): Observable<any> {
    let payload = { id: id_scheda }
    return this.postAuth(PLAYER_SERVICE.DEL_DETTAGLIO_SCHEDA, payload)
  }

  getClassificaGenerale() {
    return this.getAuth(PLAYER_SERVICE.GET_CLASSIFICA_GENERALE)
  }

}
