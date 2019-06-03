import { Route } from '@angular/router/src/config';
import { BookListComponent } from './books/book-list/book-list.component';
import { SingleBookComponent } from './books/single-book/single-book.component';
import { AddBookComponent } from './books/add-book/add-book.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books'
  },
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/get/:id',
    component: SingleBookComponent
  },
  {
    path: 'books/add',
    component: AddBookComponent,
  }
];
