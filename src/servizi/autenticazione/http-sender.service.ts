import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { COMP_STORAGE, TOKEN_STORAGE, WS_BASE_URL } from 'src/environments/env';
import { TokenModel } from 'src/app/classi/model/token.model';


export class HttpSenderService {

  typeServices: string;

  constructor(type = "/", private httpClient: HttpClient) {
    this.typeServices = type
  }


  helper = new JwtHelperService();
  myheaders:any

  refreshHeaders() {
    if (!this.myheaders) {
      this.myheaders = {
        headers: new HttpHeaders()
          .set('Authorization', `Bearer ${this.getLoggato().token}`)
          .set('Competizione', this.getCompetizioneHeader())
      }

    }
  }

  buildURL(operation: string = ""): string {

    let URL: string = WS_BASE_URL

    URL = URL + this.typeServices + operation + ".php"

    return URL

  }

  getLocalStorageParse() {
    let storage = this.getLocalStorage()
    return storage ? JSON.parse(storage) : false
  }

  getLocalStorage() {
    return localStorage.getItem(TOKEN_STORAGE)
  }

  delLocalStorage() {
    localStorage.removeItem(TOKEN_STORAGE);
    localStorage.removeItem(COMP_STORAGE);
  }

  setLocalStorage(input: any) {
    localStorage.setItem(TOKEN_STORAGE, input);
  }


  selCompetizione(comp: any) {
    let input = JSON.stringify(comp)
    localStorage.setItem(COMP_STORAGE, input);
    this.refreshPage()
  }

  delCompetizione() {
    localStorage.removeItem(COMP_STORAGE);
  }

  getCompetizione() {
    let element = localStorage.getItem(COMP_STORAGE)
    return element ? JSON.parse(element) : null
  }

  existCompetizione():boolean {
    let element = localStorage.getItem(COMP_STORAGE)
    return element ? true : false
  }

  getCompetizioneHeader() {
    let element = localStorage.getItem(COMP_STORAGE)
    return element ? JSON.parse(element).id : '0'
  }


  getLoggato() {
    let element = this.getLocalStorageParse()
    let utente: TokenModel = new TokenModel()

    if (element) {
      utente.username = element.username
      utente.email = element.email
      utente.cellulare = element.cellulare
      utente.nome = element.nome
      utente.cognome = element.cognome
      utente.id = element.id_utente
      utente.ruolo = element.ruolo
      utente.token = element.token
      utente.comp = element.comp
    }

    return utente
  }


  scadenza() {
    let primaDate = new Date();
    primaDate.setHours(primaDate.getHours() + 2);

    return primaDate;
  }


  handleError(response: HttpErrorResponse) {
    console.log("response", response)
    let message = response.error ? response.error.message : response
    return throwError(() => new Error(message))
  }

  tokenError(res: any) {
    let errorToken = res['errorToken'];
    if (errorToken) {
      throw new Error('Token Non Valido')
    }
  }

  refreshPage() {
    window.location.reload();
  }

  postFree(servizio: string, payload: any) {

    return this.httpClient.post(`${this.buildURL(servizio)}`, { data: payload })
      .pipe(map((res: any) => {
        return res['data'];
      }),
        catchError(this.handleError));
  }

  putFree(servizio: string, payload: any) {

    return this.httpClient.put(`${this.buildURL(servizio)}`, { data: payload })
      .pipe(map((res: any) => {
        return res['data'];
      }),
        catchError(this.handleError));
  }

  getFree(servizio: string, params?: HttpParams) {

    return this.httpClient.get(`${this.buildURL(servizio)}`, { params: params }).pipe(
      map((res: any) => {
        return res['data'];
      }),
      catchError(this.handleError));
  }


  getAuth(servizio: string, params?: HttpParams) {

    this.refreshHeaders()

    return this.httpClient.get<any>(`${this.buildURL(servizio)}`,
      { params: params, headers: this.myheaders.headers })
      .pipe(map((res: any) => {
        this.tokenError(res);//controllo token
        return res['data']
      }),
        catchError(this.handleError));
  }


  postAuth(servizio: string, payload: any) {

    this.refreshHeaders()

    return this.httpClient.post(`${this.buildURL(servizio)}`,
      { data: payload }, this.myheaders)
      .pipe(map((res: any) => {
        this.tokenError(res);//controllo token
        return res['data'];
      }),
        catchError(this.handleError));
  }

  putAuth(servizio: string, payload: any) {

    this.refreshHeaders()

    return this.httpClient.put(`${this.buildURL(servizio)}`,
      { data: payload }, this.myheaders)
      .pipe(map((res: any) => {
        this.tokenError(res);//controllo token
        return res['data'];
      }),
        catchError(this.handleError));
  }

}
