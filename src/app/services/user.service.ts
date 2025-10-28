import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL: string = 'http://localhost:8080/api/users';

  private http: HttpClient = inject(HttpClient);

  public getByUsername(username: string): Observable<UserModel> {
    return this.http.get(`${this.API_URL}/getByUsername/${username}`);
  }

  public getByUsersId(users_id: number): Observable<UserModel> {
    return this.http.get(`${this.API_URL}/getById/{users_id}}`);
  }

  public postUsers(user: UserModel): Observable<UserModel> {
    return this.http.post(`${this.API_URL}/postUsers]}`, user);
  }

  public putUsers(users_id: number, user: UserModel): Observable<UserModel> {
    return this.http.put(`${this.API_URL}/putUsers/${users_id}`, user);
  }

  public pathUsers(users_id: number, user: Partial<UserModel>): Observable<UserModel> {
    return this.http.patch(`${this.API_URL}/patchUsers/${users_id}`, user);
  }

  public deleteUsers(users_id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/deleteUsers/${users_id}`);
  }

}
