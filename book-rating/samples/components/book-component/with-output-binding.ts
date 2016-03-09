// book-component.ts
import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Book} from '../../models/book';

@Component({
  /* ... */
})
export default class BookComponent {
  @Input() book: Book;
  @Output() rated: EventEmitter = new EventEmitter();;

  rateUp() {
    this.book.rating++;
    this.rated.emit(this.book);
  }

  rateDown() {
    this.book.rating--;
    this.rated.emit(this.book);
  }
}
