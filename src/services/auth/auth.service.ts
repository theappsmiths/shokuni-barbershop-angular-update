import { Injectable } from '@angular/core';
import { GlobalService } from '../global/global.service';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public vars:GlobalService,
    private _http:HttpClient
  ) { }

  /**
   * Method to loging user
   * 
   * @param values {username: "barber@email.com", password: "123456", remember: null}
   */
  loginUser(values:Object):Observable <any> {
    let url = this.vars.backend_url + '/users/login';
    
    // request for login
    return this._http.post (url,values).pipe(
      catchError (this.vars.handleError)
    );
  }
}
