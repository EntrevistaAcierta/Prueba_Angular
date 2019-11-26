import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class Services {

  private _user = {
    Username : 'afilia',
    Password : 'entrevistas'
  }

  private apiUrl = 'http://afiliaapiproduc1.bitnamiapp.com/v1';
  //private httpHeaders = new HttpHeaders({ContenType: 'application/json', usuario: 'afilia', contraseña: 'entrevistas'});
  private urlEndpoint = this.apiUrl + '/userentrevistas';

    private httpHeaders = new HttpHeaders({
      //'Content-Type': 'application/json',
      Authorization: 'Basic YWZpbGlhOmVudHJldmlzdGFz'
    });
  constructor(
    private http: HttpClient
  ) { }

  gerUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlEndpoint, {headers: this.httpHeaders});
  }

  saveUser(user: User) {
    return this.http.post(this.apiUrl + '/userentrevistas', user);
  }

  deleteUser(id: string) {
    return this.http.delete(this.apiUrl + `/userentrevistas/${id}`);
  }

}
