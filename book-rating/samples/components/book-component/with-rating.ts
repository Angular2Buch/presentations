// book-component.ts
import {Component, Input} from 'angular2/core';
import {Book} from '../../models/book';

@View({
  selector: 'book',
  template: `
    <div class="well">
      <!-- ... -->

      <button (click)="rateUp()" class="btn btn-default glyphicon glyphicon-thumbs-up"></button>
      <button (click)="rateDown()" class="btn btn-default glyphicon glyphicon-thumbs-down"></button>
    </div>
  `
})
export class BookComponent {
  @Input() book: Book;

  rateUp() { this.book.rating++; }
  rateDown() { this.book.rating--; }
}
