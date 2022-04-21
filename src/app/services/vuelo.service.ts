import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vuelo } from '../interfaces/vuelo';


@Injectable({
  providedIn: 'root'
})
export class VueloService {

  /* myAppUrl = 'https://localhost:44374/';
  myApiUrl = 'api/vuelo/'; */
  /* myAppUrl = 'https://localhost:44351/';
  myApiUrl = 'api/vuelo/'; */
  myAppUrl = 'https://bellnavisaeropuerto.azurewebsites.net/'
  myApiUrl = 'api/vuelo/';
  constructor(private http: HttpClient) { }

  getListVuelos(): Observable<any>{

    return this.http.get(this.myAppUrl + this.myApiUrl);

  }

  deleteVuelo(id: number):Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  getVuelo(id:number):Observable<any>{

    return this.http.get(this.myAppUrl + this.myApiUrl + id);

  }

  saveVuelo(vuelo:Vuelo):Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl,vuelo);
  }

  updateVuelo(id:number,vuelo:Vuelo):Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl + id,vuelo);
  }
}
