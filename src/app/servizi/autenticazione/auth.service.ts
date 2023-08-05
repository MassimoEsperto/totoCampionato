import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpSenderService } from './http-sender.service';
import { map, catchError } from 'rxjs/operators';
import { SERVICE_TYPE } from 'src/app/classi/costanti';
import { Observable } from 'rxjs';
import { Ruolo } from 'src/app/classi/enums';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpSenderService {

  /**
   * Costruttore
   * @param http Servizio richieste HTTP
   */
  constructor(private http: HttpClient, private route: Router) {
    super(SERVICE_TYPE.AUT);
  }

  /**
   * Login
   * @param username Username
   * @param password Password
   */
  login(payload: any) {

    return this.http.post(`${this.buildURL("sign-in")}`, { data: payload })
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

  refreshPage() {
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

  /**
   * recupera la password
   * @param username 
   * @param email 
   */

 

  recPass(id: string) {

    const params = new HttpParams().set('id_utente', id);

    return this.http.get<any>(`${this.buildURL("recupera_password")}`, { params: params })
      .pipe(map((res) => {

        return 'OK';

      }),
        catchError(this.handleError));
  }
  

  register(payload: any): Observable<any[]>  {

    return this.http.post(`${this.buildURL("register_utente")}`, { data: payload })
      .pipe(map((res:any) => {
        return res['data'];
      }),
        catchError(this.handleError));
  }


}
