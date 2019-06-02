import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private baseUrl = 'http://localhost:3000/Service1.svc/json';

  constructor(private httpClient: HttpClient) {
  }


  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseUrl}/books`);
  }


}
