import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {  

  private subject = new Subject<any>();  

  confirmThis(message: string, confermato: () => void): any {  
      this.setConfirmation(message, confermato);  
  }  

  confirmGeneric(confermato: () => void): any {  
    this.setConfirmation("Sei sicuro di voler effettuare l'operazione?", confermato);  
}

  setConfirmation(message: string, confermato: () => void): any {  
      const that = this;  
      this.subject.next({   
          text: message,  
          confermato(): any {  
                  that.subject.next();  
                  confermato();  
              }
      });  

  }  

  getMessage(): Observable<any> {  
      return this.subject.asObservable();  
  }  
}