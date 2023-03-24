import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Desarrollo } from '../entity/desarrollo';

@Injectable({
  providedIn: 'root'
})
export class SDesarrolloService {
  url= 'https://portfolio-backend-qdvf.onrender.com/desarrollo/'
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Desarrollo[]>{
    return this.httpClient.get<Desarrollo[]>(this.url + 'lista')
  }

  public getById(id: number): Observable<Desarrollo[]>{
    return this.httpClient.get<Desarrollo[]>(this.url + `ver/${id}`)
  }

  public save(persona: Desarrollo): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', persona)
  }

  public update(persona: Desarrollo): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', persona)
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`)
  }
}
