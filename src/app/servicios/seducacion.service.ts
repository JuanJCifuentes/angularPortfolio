import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../entity/educacion';

@Injectable({
  providedIn: 'root'
})
export class SEducacionService {
  url= 'https://portfolio-backend-qdvf.onrender.com/estudio/'
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + 'lista')
  }

  public getById(id: number): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + `ver/${id}`)
  }

  public save(persona: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', persona)
  }

  public update(persona: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', persona)
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`)
  }
}
