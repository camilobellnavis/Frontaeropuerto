import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  /* myAppUrl = 'https://localhost:44351/';
  myApiUrl = 'api/Login/'; */
  myAppUrl = 'https://bellnavisaeropuerto.azurewebsites.net/';
  myApiUrl = 'api/Login/';

  constructor(private http: HttpClient) { }

  getListUsuarios(): Observable<any>{

    return this.http.get(this.myAppUrl + this.myApiUrl);

  }

  deleteUsuario(id: number):Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  getUsuario(id:number):Observable<any>{

    return this.http.get(this.myAppUrl + this.myApiUrl + id);

  }

  saveUsuario(usuario:Usuario):Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl,usuario);
    
  }

  updateUser(id:number,usuario:Usuario):Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl + id,usuario);
  }
}
