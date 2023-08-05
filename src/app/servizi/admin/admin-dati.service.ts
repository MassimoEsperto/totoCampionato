import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpSenderService } from '../autenticazione/http-sender.service';
import { map, catchError } from 'rxjs/operators';
import { RETURN_OK, SERVICE_TYPE } from 'src/app/classi/costanti';
import { Observable } from 'rxjs';
import { Competizione } from 'src/app/model/Competizione';
import { Utente } from 'src/app/model/Utente';

@Injectable({
  providedIn: 'root'
})
export class AdminDatiService extends HttpSenderService {

  constructor(private http: HttpClient, private route: Router) {
    super(SERVICE_TYPE.ADMIN.DATI);
  }

  /*UTENTI */
  getUtenti(): Observable<Utente> {
    return this.http.get(`${this.buildURL("get_utenti")}`).pipe(
      map((res: any) => {

        return res['data'];
      }),
      catchError(this.handleError));
  }

  updUtente(payload: any) {

    return this.http.post(`${this.buildURL("upd_utente")}`, { data: payload })
      .pipe(map((res: any) => {
        return RETURN_OK;
      }),
        catchError(this.handleError));
  }

  delUtente(payload: any) {

    return this.http.post(`${this.buildURL("del_utente")}`, { data: payload })
      .pipe(map((res: any) => {
        return RETURN_OK;
      }),
        catchError(this.handleError));
  }

  /*SUADRE */

  getSquadre(): Observable<any> {
    return this.http.get(`${this.buildURL("get_squadre")}`).pipe(
      map((res: any) => {

        return res['data'];
      }),
      catchError(this.handleError));
  }

  setSquadra(payload: any) {

    return this.http.post(`${this.buildURL("set_squadra")}`, { data: payload })
      .pipe(map((res: any) => {
        return RETURN_OK;
      }),
        catchError(this.handleError));
  }


  delSquadra(payload: any) {

    return this.http.post(`${this.buildURL("del_squadra")}`, { data: payload })
      .pipe(map((res: any) => {
        return RETURN_OK;
      }),
        catchError(this.handleError));
  }

 
   /*COMPETIZIONI */

   getCompetizioni(): Observable<Competizione> {
    return this.http.get(`${this.buildURL("get_competizioni")}`).pipe(
      map((res: any) => {

        return res['data'];
      }),
      catchError(this.handleError));
  }

  setCompetizione(payload: any) {

    return this.http.post(`${this.buildURL("set_competizione")}`, { data: payload })
      .pipe(map((res: any) => {
        return RETURN_OK;
      }),
        catchError(this.handleError));
  }

  updCompetizione(payload: any) {

    return this.http.post(`${this.buildURL("upd_competizione")}`, { data: payload })
      .pipe(map((res: any) => {
        return RETURN_OK;
      }),
        catchError(this.handleError));
  }

  /*SCHEDE */

  getSchede(): Observable<any> {
    return this.http.get(`${this.buildURL("get_schede")}`).pipe(
      map((res: any) => {

        return res['data'];
      }),
      catchError(this.handleError));
  }

  delScheda(payload: any) {

    return this.http.post(`${this.buildURL("del_scheda")}`, { data: payload })
      .pipe(map((res: any) => {
        return RETURN_OK;
      }),
        catchError(this.handleError));
  }

}

