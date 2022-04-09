import { baseUrl } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor(private http: HttpClient) { }
  register(r: any): Observable<any> {
    return this.http.post(baseUrl + 'user/register', r);
  }
  login(r: any): Observable<any> {
    return this.http.post(baseUrl + 'user/login/', r);
  }
  async findByRole(role: string) {
    let result: any;

    await this.http.get(baseUrl + 'user/role/' + role)
      .toPromise()
      .then(res => { result = res; })
      .catch(error => { console.log(error); });
    return result;
  }
}
