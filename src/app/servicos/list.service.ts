import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Contato } from '../Contato';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/contatos';
  private apiUrlContatos = 'http://localhost:3000/contatos';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getAll():Observable<Animal[]> {
      return this.http.get<Animal[]>(this.apiUrl);
    }

  getItem(id:Number):Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
  remove(id: Number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }
  setItem(animal: Animal):Observable<Animal> {
    return this.http.post<Animal>(this.apiUrl,animal);
  }
  setContato(contato: Contato) {
    return this.http.post<Contato>(this.apiUrlContatos,contato);    
  }
  updateUser(id: Number, contato: Contato):Observable<Contato> {
    const _url = `${this.apiUrl}/${id}`
    return this.http.put<Contato>(_url, contato)
  }
}