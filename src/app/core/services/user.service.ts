import { ErrorCode } from './error-code.service';
import { CodeErrorEnum } from './../enum/code-error.enum';
import { Injectable } from '@angular/core';
import { 
  HttpClient, 
  HttpHeaders, 
  HttpParams,
  HttpErrorResponse
} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../model/user.model';
import { filter, map, catchError } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    // 'Pagination-Count': '100',
    // 'Pagination-Page': '5',
    // 'Pagination-Limit': '20',
    'Content-Type': 'application/json'

  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  activatedEmitter = new Subject<boolean>();
  dbConnectedEmitter = new Subject<boolean>();
  error = new Subject<string>();

  // private userCreateUrl = environment.userCreateUrl;
  private dbConnectionUrl = environment.dbConnectionUrl;
  private userUrl = environment.userUrl;

  constructor(
    private http: HttpClient,
    private errorCode: ErrorCode) { }

  usersChanged = new Subject<User[]>();
  private users: User[] = [];

  // talkToServer(){ 
  //   return this.http.get<{ [key: string]: User }>(
  //     this.dbConnectionUrl, httpOptions
  //   ).pipe(
  //       map(responseData => {
  //         return responseData;
  //       }),
  //       catchError( errorRes => {
  //         return throwError(errorRes);
  //     })
  //   );
  // }

  talkToServer(){ 
    return this.http.get<{ [key: string]: User }>(
      this.dbConnectionUrl, httpOptions
    ).pipe(
      catchError(this.errorCode.handleError)
    );
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     return throwError('Something went wrong in the client. Please try again');
  //   } else {
  //     if(error.status === CodeErrorEnum.UNAUTHORIZED) {
  //       console.log(error.error.message)
  //       return throwError(error.error.message);
  //     } else if(error.status === CodeErrorEnum.UNKNOWN_ERROR) {
  //       return throwError('Sorry the server is down. Please try again later');
  //     } else {
  //       return throwError('Something went wrong in the server. Please try again');
  //     }
  //   }
  // }

  public fetchUsers(offset) {
    let userUrl = this.userUrl;
    if (offset === 0) {
      userUrl
    } else {
      userUrl = offset;
    }

    return this.http.get<{ [key: string]: User }>(
      userUrl, httpOptions
    ).pipe(
        map(responseData => {
          
          // console.log(userUrl);
       
          // const userArray: User[] = [];
          // for (const key in responseData) {
          //   console.log(key)
          //   // if (responseData.hasOwnProperty(key)) {
          //   //     userArray.push({ ...responseData[key] })
          //   // }

          //   userArray.push(responseData[key])
          // }
          
          // this.users = userArray;
          // this.usersChanged.next(this.users.slice());
          return responseData;
        }),
        catchError(this.errorCode.handleError)
      //   catchError( errorRes => {
      //     console.log(errorRes)
      //     return throwError(errorRes);
      // })
    );
  }

  public addUser(user: User) {
    return this.http.post<User>(this.userUrl + '/create', user, httpOptions);
  }

  public isExistsProductCode(code: string) {

    const params = new HttpParams().set('code', code);

    // return this.http.get<boolean>(this.userUrl+ '/create', {...httpOptions, params});
    return this.http.get<boolean>(this.userUrl+ '/create', {...httpOptions, params}).pipe(catchError(this.errorCode.handleError));
  }

  getUser(id: number) {
    
    return this.http.get<User>(
      this.userUrl + '/' + id, httpOptions
    ).pipe(
      map(responseData => {
        // console.log(responseData);
        return responseData;
      }),
      catchError( errorRes => {
        return throwError(errorRes);
      })
    );

    // const users = this.users.find(
    //   (s) => {
    //     return s.id === id;
    //   }
    // );
    // return users;

    // return this.fetchUsers().subscribe(data => {
    //   const users = data.find(
    //     (s) => {
    //       return s.id === id;
    //     }
    //   );
    //   console.log(users);
    //   return users;
    // });
  }

  // private servers = [
  //   {
  //     id: 5,
  //     image: 'Productionserver',
  //     userId: 'online',
  //     firstName: 'Maru5',
  //     middleName: 'online',
  //     lastName: 'online',
  //     extensionName: 'online',
  //     address: 'online',
  //     emailAddress: 'online',
  //     contactNumber: 'online'
  //   },
  //   {
  //     id: 6,
  //     image: 'Productionserver',
  //     userId: 'online',
  //     firstName: 'Maru6',
  //     middleName: 'online',
  //     lastName: 'online',
  //     extensionName: 'online',
  //     address: 'online',
  //     emailAddress: 'online',
  //     contactNumber: 'online'
  //   },
  //   {
  //     id: 7,
  //     image: 'Productionserver',
  //     userId: 'online',
  //     firstName: 'Maru7',
  //     middleName: 'online',
  //     lastName: 'online',
  //     extensionName: 'online',
  //     address: 'online',
  //     emailAddress: 'online',
  //     contactNumber: 'online'
  //   }
  // ];

  // getUser(id: number) {
  //   const server = this.servers.find(
  //     (s) => {
  //       return s.id === id;
  //     }
  //   );
  //   return server;
  // }
}
