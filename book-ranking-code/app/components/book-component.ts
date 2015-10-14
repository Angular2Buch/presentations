import { Component, View } from 'angular2/angular2';
import Book from '../models/book';

@Component({
  selector: 'book', properties: ['book']
})
@View({
  template: `
    <div class="main">
      <h2>
        <a href="{{ book.link }}">{{ book.title }}</a>
      </h2>
    </div>
  `
})
export default class BookComponent {
  book: Book;
}
