import { Component, View, EventEmitter } from 'angular2/angular2';
import Book from '../models/book';

@Component({
  selector: 'book',
  inputs: ['book'],
  outputs: ['rated']
})
@View({
  template: `
    <div class="main">
      <h2>
        <a href="{{ book.link }}">{{ book.title }} {{ book.rating }}</a>
        <button (click)="rateUp()">Rate up</button>
        <button (click)="rateDown()">Rate down</button>
        <hr />
      </h2>
    </div>
  `
})
export default class BookComponent {
  book: Book;
  rated: EventEmitter = new EventEmitter();;

  rateUp() {
    this.book.rating++;
    this.rated.next(this.book);
  }

  rateDown() {
    this.book.rating--;
    this.rated.next(this.book);
  }
}
