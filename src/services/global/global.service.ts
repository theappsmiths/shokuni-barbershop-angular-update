import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public project_title:String = "shokuni";
  public project_sub_title:String = "barber shop";

  public user_role:String = "barber";
  public backend_url:String = "https://api.shokunidev.co.uk/v2";

  public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  displayLoader(value: boolean) {
    this.loaderStatus.next(value);
  }
}
