import { Component, View } from 'angular2/angular2';
import Book from '../models/book';

@Component({
  selector: 'book',
  properties: ['book'],
})
@View({
  template: `
    <div class="main">
      <h2>
        <a href="{{ book.link }}">{{ book.title }} {{ book.rating }}</a>
        <button (click)="voteUp()">Vote up</button>
        <button (click)="voteDown()">Vote down</button>
        <hr />
      </h2>
    </div>
  `
})
export default class BookComponent {
  book: Book;

  voteUp() {
    this.book.rating++;
  }

  voteDown() {
    this.book.rating--;
  }
}
