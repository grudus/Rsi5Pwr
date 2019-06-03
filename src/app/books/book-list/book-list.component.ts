import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  private books$: Observable<Book[]>;

  constructor(private booksService: BookServiceService) {
  }

  ngOnInit() {
    this.books$ = this.booksService.getAll();
  }

}
