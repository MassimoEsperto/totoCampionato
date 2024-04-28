import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpSenderService } from './http-sender.service';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AUTH_SERVICE, SERVICE_TYPE } from 'src/environments/costanti';
import { Ruolo } from 'src/environments/enums';


@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpSenderService {

  /**
   * Costruttore
   * @param http Servizio richieste HTTP
   */
  constructor(private http: HttpClient) {
    super(SERVICE_TYPE.AUT,http);
  }

  /**
   * Login
   * @param username Username
   * @param password Password
   */
  login(payload: any) {

    return this.http.post(`${this.buildURL(AUTH_SERVICE.SIGNI_IN)}`, { data: payload })
      .pipe(map((res: any) => {
        let token = res['token'];

        const decoded = this.helper.decodeToken(token);
        decoded.token = token;

        this.setToken(decoded);

        return decoded;
      }),
        catchError(this.handleError));
  }


  /**
   * Effettua il logout
   */
  logout(): void {
    this.delLocalStorage()
    window.location.reload();
  }


  /**
   * Verifica se l'utente è loggato
   */
  isLogged(): boolean {

    let token = this.getLocalStorage()

    if (!token) return false; //nel caso nn ci sia token

    let now = new Date();
    let scadenza: Date = new Date(this.getLocalStorageParse().scadenza);

    // Ritorna true se il token è presente nella sessione false nel caso sia scaduto
    return !!token && now < scadenza

  }

  isAdmin() {

    if(!this.isLogged()) return false

    let utente = this.getLocalStorageParse()
    if (utente.ruolo == Ruolo.ADMIN) {
      return true
    }
    else {
      return false
    }
  }


  /**
  * salva il token in sessione
  * @param tkuser 
  */
  setToken(tkuser: any) {
    tkuser.scadenza = this.scadenza().toString();
    let input = JSON.stringify(tkuser)
    this.setLocalStorage(input)
  }


  recPass(id: string) {
    const params = new HttpParams().set('id_utente', id);
    return this.getAuth(AUTH_SERVICE.RECUPERA_PASSWORD, params)
  }
  
  register(payload: any): Observable<any> {
    return this.postAuth(AUTH_SERVICE.REGISTER_UTENTE, payload)
  }


}
