import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { WS_BASE_URL } from 'src/app/classi/costanti';
import { UtenteToken } from 'src/app/classi/utente';

const compStorage: string = "comp-now-sc";
const tokenStorage: string = "tk-pro-mar-sc";

export class HttpSenderService {

  typeServices: string;

  constructor(type: string) {
    this.typeServices = type
  }


  helper = new JwtHelperService();
  myheaders = { headers: new HttpHeaders()
    .set('Authorization', `Bearer ${this.getLoggato().token}`)
    .set('Competizione',this.getCompetizioneHeader()) }

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
    return localStorage.getItem(tokenStorage)
  }

  delLocalStorage() {
    localStorage.removeItem(tokenStorage);
    localStorage.removeItem(compStorage);
  }

  setLocalStorage(input: any) {
    localStorage.setItem(tokenStorage, input);
  }


  setCompetizione(comp: any) {
    let input = JSON.stringify(comp)
    localStorage.setItem(compStorage, input);
    this.refreshPage()
  }

  delCompetizione() {
    localStorage.removeItem(compStorage);
  }

  getCompetizione() {
    let element = localStorage.getItem(compStorage)
    return element ? JSON.parse(element) : null
  }

  getCompetizioneHeader() {
    let element = localStorage.getItem(compStorage)
    return element ? JSON.parse(element).id : '0'
  }


  getLoggato() {
    let element = this.getLocalStorageParse()
    let utente: UtenteToken = new UtenteToken()

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
    return throwError(message);
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


}
