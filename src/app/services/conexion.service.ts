import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//peticiones http


export class ConexionService {
  myAppUrl ="http://www.mensajes.somee.com/";
  myApiUrl ="CreateMessage";
  constructor(private http:HttpClient) { }

   postMensaje(data:any ): Observable<any>{
      return this.http.post(this.myAppUrl+this.myApiUrl,data);
   }

   
}
