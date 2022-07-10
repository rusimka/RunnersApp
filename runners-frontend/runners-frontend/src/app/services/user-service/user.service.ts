import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


const API_URL = 'http://localhost:8081/api/test/';
const USERS_API_URL = 'http://localhost:8081/users';
const UPDATE_USER_ROLE_API_URL = "http://localhost:8081/add-role-to-user"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
   return this.http.get(API_URL + 'all', {responseType: 'text'}) ;
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', {responseType: 'text'});
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', {responseType: 'text'});
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', {responseType: 'text'});
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${USERS_API_URL}`);
  }

  addModeratorRoleToUser(userId: number): Observable<any> {
    return this.http.put(`${UPDATE_USER_ROLE_API_URL}/${userId}`, userId);
  }

}
