import { Injectable } from '@angular/core';
import { ResponseI } from '../../Modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GrupoI } from '../../Modelos/grupo.interface';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "https://kangular.websitos256.com/api/grupo";
  constructor(private http:HttpClient) { }
  GetAll():Observable<GrupoI[]>{
    
    return this.http.get<GrupoI[]>(this.url);
  }
  Get(id:any):Observable<GrupoI>{
    let direccion = this.url+ "/" + id
    return this.http.get<GrupoI>(direccion)
  }
  Put(id: number, grupo:GrupoI){
    let direccion = this.url + "/"+id;
    return this.http.put(direccion, grupo )
  }
  Create(grupo:GrupoI){
    let direccion = this.url;
    return this.http.post(direccion, grupo)
  }
  Delete(id:number){
    let direccion = this.url +"/"+id;
    return this.http.delete(direccion)
  }
}
