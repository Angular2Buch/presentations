// book-component.ts
import { Component, View, Input } from 'angular2/angular2';
import Book from '../models/book';

@Component({ /* ... */ })
@View({
  template: `
    <div class="well">
      <!-- ... -->

      <button (click)="rateUp()" class="btn btn-default glyphicon glyphicon-thumbs-up"></button>
      <button (click)="rateDown()" class="btn btn-default glyphicon glyphicon-thumbs-down"></button>
    </div>
  `
})
export default class BookComponent {
  @Input() book: Book;

  rateUp() {
    this.book.rating++;
  }

  rateDown() {
    this.book.rating--;
  }
}
