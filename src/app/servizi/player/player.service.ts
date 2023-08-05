import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SERVICE_TYPE } from 'src/app/classi/costanti';
import { HttpSenderService } from '../autenticazione/http-sender.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService extends HttpSenderService {

  constructor(private http: HttpClient, private route: Router) {
    super(SERVICE_TYPE.PLAYER);
  }

  getSchedaMaster(id_giornata: number): Observable<any> {

    const params = new HttpParams().set('id_giornata', id_giornata);

    return this.http.get<any>(`${this.buildURL("get_dettaglio_scheda")}`,
      { params: params, headers: this.myheaders.headers })
      .pipe(map((res) => {

        this.tokenError(res);//controllo token

        return res['data']

      }),
        catchError(this.handleError));
  }

  getDettaglioScheda(id_giornata: number, id_schedina: number): Observable<any> {

    const params = new HttpParams().set('id_giornata', id_giornata).set('id_schedina', id_schedina);

    return this.http.get<any>(`${this.buildURL("get_dettaglio_scheda")}`,
      { params: params, headers: this.myheaders.headers })
      .pipe(map((res) => {

        this.tokenError(res);//controllo token

        return res['data']

      }),
        catchError(this.handleError));
  }



 


  getComboScheda(): Observable<any> {

    return this.http.get<any>(`${this.buildURL("get_combo_scheda")}`,
      { headers: this.myheaders.headers })
      .pipe(map((res) => {

        this.tokenError(res);//controllo token

        return res['data']

      }),
        catchError(this.handleError));
  }

  getInfo(): Observable<any> {

    return this.http.get<any>(`${this.buildURL("get_info_home")}`,
      { headers: this.myheaders.headers })
      .pipe(map((res) => {

        this.tokenError(res);//controllo token

        return res['data']

      }),
        catchError(this.handleError));
  }

  setDettaglioScheda(scheda: any, id_giornata: number): Observable<any> {

    let payload = { scheda: scheda, id_giornata: id_giornata }

    return this.http.post(`${this.buildURL("set_dettaglio_scheda")}`,
      { data: payload }, this.myheaders)
      .pipe(map((res: any) => {

        this.tokenError(res);//controllo token

        return res['data']
      }),
        catchError(this.handleError));
  }

 

  

  getSchedeUtente(): Observable<any> {

    return this.http.get<any>(`${this.buildURL("get_schede_utente")}`,
      { headers: this.myheaders.headers })
      .pipe(map((res) => {

        this.tokenError(res);//controllo token

        return res['data']

      }),
        catchError(this.handleError));
  }


  getClassificaGenerale(): Observable<any> {

    return this.http.get<any>(`${this.buildURL("get_classifica_generale")}`,
      { headers: this.myheaders.headers })
      .pipe(map((res) => {

        this.tokenError(res);//controllo token

        return res['data']

      }),
        catchError(this.handleError));
  }

  getClassificaGiornaliera(): Observable<any> {

    return this.http.get<any>(`${this.buildURL("get_classifica_generale")}`,
      { headers: this.myheaders.headers })
      .pipe(map((res) => {

        this.tokenError(res);//controllo token

        return res['data']

      }),
        catchError(this.handleError));
  }

 
}
