import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './models/Book';
import * as xml2js from '../utils/json2xml';
import convertXmlToJson from '../utils/xml2json';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private baseUrl = 'http://web80.website.net.ii.pwr.wroc.pl/rsi05/Service1.svc';

  constructor(private httpClient: HttpClient) {
  }


  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseUrl}/xml/books`, {responseType: 'text' as 'json'})
      .pipe(
        map(res => {
          const json = xml2js.xmlToJson(xml2js.textToXml(res)) as { ArrayOfBook: { Book: Book[] } };
          return json.ArrayOfBook.Book;
        })
      );
  }

  getById(id: string): Observable<Book> {
    return this.httpClient.get<Book>(`${this.baseUrl}/xml/books/${id}`, {responseType: 'text' as 'json'})
      .pipe(
        map(res => {
          const json = xml2js.xmlToJson(xml2js.textToXml(res)) as { Book: Book };
          return json.Book;
        })
      );
  }

  addBook(book: Book): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/json/books`, book, {responseType: 'text'});
  }

  deleteBook(id: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/json/books/${id}`, {responseType: 'text'});
  }

  addBookXml(book: Book): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/xml',
        'Response-Type': 'text'
      })
    };
    const xmlBook = convertXmlToJson(book);
    return this.httpClient.post(`${this.baseUrl}/xml/books`, xmlBook, httpOptions);
  }
}
