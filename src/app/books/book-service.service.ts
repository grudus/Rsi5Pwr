import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private baseUrl = 'http://web80.website.net.ii.pwr.wroc.pl/rsi05/Service1.svc/json';

  constructor(private httpClient: HttpClient) {
  }


  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseUrl}/books`);
  }

  getById(id: string): Observable<Book> {
    return this.httpClient.get<Book>(`${this.baseUrl}/books/${id}`);
  }

  addBook(book: Book): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/books`, book, {responseType: 'text'});
  }

  deleteBook(id: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/books/${id}`, {responseType: 'text'});
  }

  update(id: string, updatedBook: Book): Observable<any> {
    return this.httpClient.put<Book>(`${this.baseUrl}/books/${id}`, updatedBook, {responseType: 'text' as 'json'});
  }
}
