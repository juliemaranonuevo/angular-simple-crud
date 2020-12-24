import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { 
    HttpClient, 
    HttpHeaders, 
    HttpParams,
    HttpErrorResponse
  } from '@angular/common/http';

import { filter, map, catchError } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { CodeErrorEnum } from '../enum/code-error.enum';
import { ErrorCodeEnum } from '../enum/error-code.enum';

@Injectable({
  providedIn: 'root'
})
export class ErrorCode {

  constructor() { }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      return throwError('Something went wrong in the client. Please try again.');
    } else {
      if(error.status === ErrorCodeEnum.UNAUTHORIZED) {
        console.log(error.error.message)
        return throwError(error.error.message);
      } else if(error.status === ErrorCodeEnum.UNKNOWN_ERROR) {
        return throwError('Sorry the server is down. Please try again later.');
      } else {
        return throwError('Something went wrong in the server. Please try again.');
      }
    }
  }
}