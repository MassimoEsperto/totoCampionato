import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RETURN_OK, SERVICE_TYPE } from 'src/app/classi/costanti';
import { HttpSenderService } from '../autenticazione/http-sender.service';

@Injectable({
  providedIn: 'root'
})
export class AdminEventiService  extends HttpSenderService {

  constructor(private http: HttpClient, private route: Router) {
    super(SERVICE_TYPE.ADMIN.EVENTI);
  }

  getCombo(): Observable<any> {
    return this.http.get(`${this.buildURL("get_combo")}`).pipe(
      map((res: any) => {
        return res['data'];
      }),
      catchError(this.handleError));
  }

  getTipiPronostici(input: string) {
    const params = new HttpParams().set('id_comp', input);

    return this.http.get(`${this.buildURL("get_tipi_pro_by_comp")}`, { params: params })
      .pipe(map((res: any) => {
        return res['data'];
      }),
        catchError(this.handleError));
  }

  setTipiPronosticiComp(payload: any) {

    return this.http.post(`${this.buildURL("set_tipi_pro_by_comp")}`, { data: payload })
      .pipe(map((res: any) => {
        return RETURN_OK;
      }),
        catchError(this.handleError));
  }

  delTipiPronosticiComp(payload: any) {

    return this.http.post(`${this.buildURL("del_tipi_pro_by_comp")}`, { data: payload })
      .pipe(map((res: any) => {
        return RETURN_OK;
      }),
        catchError(this.handleError));
  }


  getGiornateComp(input: string) {
    const params = new HttpParams().set('id_comp', input);

    return this.http.get(`${this.buildURL("get_giornate_comp")}`, { params: params })
      .pipe(map((res: any) => {
        return res['data'];
      }),
        catchError(this.handleError));
  }


  setGiornateComp(payload: any) {

    return this.http.post(`${this.buildURL("set_giornata_comp")}`, { data: payload })
      .pipe(map((res: any) => {
        return RETURN_OK;
      }),
        catchError(this.handleError));
  }


  delGiornateComp(payload: any) {

    return this.http.post(`${this.buildURL("del_giornate_comp")}`, { data: payload })
      .pipe(map((res: any) => {
        return RETURN_OK;
      }),
        catchError(this.handleError));
  }

  getSquadreComp(input: string) {
    const params = new HttpParams().set('id_comp', input);

    return this.http.get(`${this.buildURL("get_squadre_comp")}`, { params: params })
      .pipe(map((res: any) => {
        return res['data'];
      }),
        catchError(this.handleError));
  }

  setSquadraComp(payload: any) {

    return this.http.post(`${this.buildURL("set_squadra_comp")}`, { data: payload })
      .pipe(map((res: any) => {
        return RETURN_OK;
      }),
        catchError(this.handleError));
  }

  delSquadraComp(payload: any) {

    return this.http.post(`${this.buildURL("del_squadra_comp")}`, { data: payload })
      .pipe(map((res: any) => {
        return RETURN_OK;
      }),
        catchError(this.handleError));
  }

  getSchedaMaster(id_comp: string,id_giornata: number) {
    const params = new HttpParams().set('id_comp', id_comp).set('id_giornata', id_giornata);

    return this.http.get(`${this.buildURL("get_scheda_master")}`, { params: params })
      .pipe(map((res: any) => {
        return res['data'];
      }),
        catchError(this.handleError));
  }

  setEventMaster(payload: any) {

    return this.http.post(`${this.buildURL("set_event_master")}`, { data: payload })
      .pipe(map((res: any) => {
        return RETURN_OK;
      }),
        catchError(this.handleError));
  }

  delEventMaster(payload: any) {

    return this.http.post(`${this.buildURL("del_event_master")}`, { data: payload })
      .pipe(map((res: any) => {
        return RETURN_OK;
      }),
        catchError(this.handleError));
  }

}
