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

    // append required parameters for login
    values['role'] = this.vars.user_role;
    values['client_id'] = this.vars.client_id;
    values['client_secret'] = this.vars.client_secret;
    values['grant_type'] = this.vars.grant_type;
    
    // request for login
    return this._http.post (url,values).pipe(
      catchError (this.vars.handleError)
    );
  }
}
