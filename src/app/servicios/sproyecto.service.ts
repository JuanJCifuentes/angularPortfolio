import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../entity/proyecto';

@Injectable({
  providedIn: 'root'
})
export class SProyectoService {
  url= 'http://localhost:8080/proyecto/'
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.url + 'lista')
  }

  public getById(id: number): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.url + `ver/${id}`)
  }

  public save(persona: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', persona)
  }

  public update(persona: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', persona)
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`)
  }
}
