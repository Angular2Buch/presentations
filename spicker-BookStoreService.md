# Spicker BookStoreService

```js
// book-store.service.ts

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Book } from '../shared';

@Injectable()
export class BookStoreService {
  private headers: Headers = new Headers();
  private api: string = 'http://book-monkey2-api.angular2buch.de';
  books: Book[];

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  }
  getSingle(isbn: string): Observable<Book> {
      return this.http
        .get(`${this.api}/book/${isbn}`)   // kein PLURAL S
        .map(response => response.json())
        .map(rawBook => new Book(rawBook.title, rawBook.description, rawBook.number, rawBook.isbn))
  }
  getAll(): Observable<Book[]> {
      return this.http
        .get(`${this.api}/books`)   // PLURAL S
        .map(response => response.json())
        .map(rawBooks => rawBooks.map(rawBook => new Book(rawBook.title, rawBook.description, rawBook.number, rawBook.isbn)))
  }
  create(book: Book): Observable<any>  {
    return this.http
      .post(`${this.api}/book`, JSON.stringify(book), { headers: this.headers })
  }
  update(book: Book): Observable<any>  {
    return this.http
      .put(`${this.api}/book/${book.isbn}`, JSON.stringify(book), { headers: this.headers })
  }
  delete(isbn: string): Observable<any> {
    return this.http
      .delete(`${this.api}/book/${isbn}`);
  }
}
```

```js
// dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BookComponent } from '../book';
import { CreateBookComponent } from '../create-book';
import { Book } from '../shared';
import { BookStoreService } from '../services/book-store.service';

@Component({
  moduleId: module.id,
  selector: 'br-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [BookComponent, CreateBookComponent]
})
export class DashboardComponent implements OnInit {
  books: Book[];
  updated: Book;

  constructor(private bs: BookStoreService) {}

  ngOnInit() {
    this.bs
      .getAll().subscribe(books => this.books = books );
  }
  add(book: Book) {
    this.bs
      .create(book)
      .subscribe(params => this.books.push(book));
  }
  delete(book: Book) {
    this.bs
      .delete(book.isbn)     
      .subscribe(params => {
        this.books = this.books.filter((c) => c != book)
      });
  }
  sort(book: Book) {
    this.books.sort((current, next) => next.rating - current.rating);
    this.updated = book;
  }
}

```

