import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from '../Contato';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/contatos';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getAll(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.apiUrl);
  }
  removeContato(id: Number) {
    return this.http.delete<Contato>(`${this.apiUrl}/${id}`);
  }
  setContato(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.apiUrl, contato);
  }
  updateContato(id: Number, contato: Contato): Observable<Contato> {
    const _url = `${this.apiUrl}/${id}`
    return this.http.put<Contato>(_url, contato)
  }
}