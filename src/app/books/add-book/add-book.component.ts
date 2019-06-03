import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from '../models/Book';
import { BookServiceService } from '../book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  private formGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private bookService: BookServiceService,
              private router: Router) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      Name: this.fb.control(''),
      Author: this.fb.control(''),
      Title: this.fb.control(''),
      Publisher: this.fb.control(''),
      PublicationYear: this.fb.control(''),
      ISBNnumber: this.fb.control(''),
    });
  }

  addBook() {
    const id = Math.floor(Math.random() * 10000);
    const book: Book = this.formGroup.getRawValue() as Book;
    book.ID = id + '';
    this.bookService.addBook(book)
      .subscribe(() => {
        this.router.navigate(['books']);
      });
  }
}
