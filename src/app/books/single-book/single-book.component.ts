import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { BookServiceService } from '../book-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {

  formGroup: FormGroup;
  id: string;

  constructor(private bookService: BookServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      Author: this.fb.control(''),
      Title: this.fb.control(''),
      Publisher: this.fb.control(''),
      PublicationYear: this.fb.control(''),
      ISBNnumber: this.fb.control(''),
    });


    this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
          this.id = params.get('id');
          return this.bookService.getById(params.get('id'));
        }
      ))
      .subscribe((book: Book) => {
        this.formGroup.controls['Author'].setValue(book.Author);
        this.formGroup.controls['Title'].setValue(book.Title);
        this.formGroup.controls['Publisher'].setValue(book.Publisher);
        this.formGroup.controls['PublicationYear'].setValue(book.PublicationYear);
        this.formGroup.controls['ISBNnumber'].setValue(book.ISBNnumber);
      });
  }

  deleteBook() {
    this.bookService.deleteBook(this.id)
      .subscribe(a => {
        this.router.navigate(['books']);
      });
  }

  updateBook() {
    const updatedBook = this.formGroup.getRawValue();
    updatedBook.ID = this.id;
    this.bookService.update(this.id, updatedBook)
      .subscribe(a => {
        this.router.navigate(['books']);
      });
  }
}
