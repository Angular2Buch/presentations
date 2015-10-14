import { Component, View } from 'angular2/angular2';
import Book from './book';

@Component({
  selector: 'book',
  properties: ['book']
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
export default class RankingBook {
  book: Book;
}
