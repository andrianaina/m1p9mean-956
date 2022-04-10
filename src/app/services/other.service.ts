import { baseUrl } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  constructor(private http: HttpClient) { }
  async getPlat(id: any) {
    let result: any;

    await this.http.get(baseUrl + 'plat/platrestaurant/' + id)
      .toPromise()
      .then(res => { result = res; })
      .catch(error => { console.log(error); });
    return result;
  }

  async findCommandeNonLivre() {
    let result: any;

    await this.http.get(baseUrl + 'commande/admin/now/')
      .toPromise()
      .then(res => { result = res; })
      .catch(error => { console.log(error); });

    return result;
  }
  async findCommandeRestaurantNow(id: any) {
    let result: any;

    await this.http.get(baseUrl + 'commande/restaurant/' + id)
      .toPromise()
      .then(res => { result = res; })
      .catch(error => { });

    return result;
  }
  async findCommandelivreur(id: any) {
    let result: any;

    await this.http.get(baseUrl + 'commande/livreur/' + id)
      .toPromise()
      .then(res => { result = res; })
      .catch(error => { console.log(error); });

    return result;
  }

  async findAllRestaurant() {
    let result: any;

    await this.http.get(baseUrl + 'user/restaurant')
      .toPromise()
      .then(res => { result = res; })
      .catch(error => { console.log(error); });

    return result;
  }
  commander(data: any): Observable<any> {
    return this.http.post(baseUrl + 'commande/add', data);
  }
  addNewPlat(r: any): Observable<any> {
    return this.http.post(baseUrl + 'plat/add', r);
  }
  updateLivreur(r: any): Observable<any> {
    return this.http.put(baseUrl + 'commande/updatelivreur/', r);
  }
  livrer(r: any): Observable<any> {
    return this.http.put(baseUrl + 'commande/livre/' + r, []);
  }
  updatelivrablePlat(r: any): Observable<any> {
    return this.http.put(baseUrl + 'commande/Plat/islivrable/' + r, []);
  }
  updateVisibilityPlat(r: any): Observable<any> {
    return this.http.put(baseUrl + 'plat/visibility', r);
  }
  async findPlatByRestaurant(r: any) {
    let result: any;

    await this.http.get(baseUrl + 'plat/restaurant/' + r)
      .toPromise()
      .then(res => { result = res; })
      .catch(error => { console.log(error); });
    return result;
  }
}
