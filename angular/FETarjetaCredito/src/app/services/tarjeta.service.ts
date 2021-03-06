import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private myAppUrl = 'https://localhost:44385/';
  private myApiUrl = 'api/tarjeta/';

  constructor(private http: HttpClient) { }

  getListTarjetas(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteTarjetas (id: number): Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }
}
