import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../Interface/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: IUser[] = [];
  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<IUser[]>{
    return this.http.get<IUser[]>('https://localhost:7165/api/User/GetAllUsers');
  }
}
