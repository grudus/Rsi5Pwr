import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { SingleBookComponent } from './books/single-book/single-book.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routerConfig';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    SingleBookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
