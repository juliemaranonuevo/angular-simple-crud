import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../model/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = environment.userUrl;

  constructor(private http: HttpClient) { }

  public addUser(user: User) {
    return this.http.post<User>(this.userUrl, user, httpOptions);
  }
}
