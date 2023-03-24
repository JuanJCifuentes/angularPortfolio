import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../entity/habilidad';

@Injectable({
  providedIn: 'root'
})
export class SHabilidadService {
  url= 'https://portfolio-backend-qdvf.onrender.com/habilidad/'
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.url + 'lista')
  }

  public getById(id: number): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.url + `ver/${id}`)
  }

  public save(persona: Habilidad): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', persona)
  }

  public update(persona: Habilidad): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', persona)
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`)
  }
}
