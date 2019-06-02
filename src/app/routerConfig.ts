import { Route } from '@angular/router/src/config';
import { BookListComponent } from './books/book-list/book-list.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books'
  },
  {
    path: 'books',
    component: BookListComponent
  }
];
