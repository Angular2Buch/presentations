// book-component.ts
import { Component, View, EventEmitter } from 'angular2/angular2';
import { Input, Output } from 'angular2/angular2';
import Book from '../models/book';

@Component({
  /* ... */
})
@View({
  /* ... */
})
export default class BookComponent {
  @Input() book: Book;
  @Output() rated: EventEmitter = new EventEmitter();;

  rateUp() {
    this.book.rating++;
    this.rated.next(this.book);
  }

  rateDown() {
    this.book.rating--;
    this.rated.next(this.book);
  }
}
