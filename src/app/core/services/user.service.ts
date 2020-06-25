import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public addUser(user: User) {
    console.log(user);
  }
}
