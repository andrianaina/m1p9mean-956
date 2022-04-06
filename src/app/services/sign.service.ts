import { baseUrl } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor(private http :HttpClient) { }
  
  register(r:any) : Observable<any>{
    return this.http.post(baseUrl+'user/register/',r);
  }
  login(r:any): Observable<any>{
    return this.http.post(baseUrl+'user/login/',r);
  }
}
