import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  myAppUrl ="https://localhost:44385/";
  myApiUrl ="Body";
  constructor(private http:HttpClient) { }

   postMensaje(data: any): Observable<any>{
      return this.http.post(this.myAppUrl+this.myApiUrl,data);
   }
}
