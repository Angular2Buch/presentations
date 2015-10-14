import {Component, View} from 'angular2/angular2'
@Component({
  selector: 'book-ranking'
})
@View({
  template: `<h1>Books</h1><p>{{ books }}</p>`
})
export default class BookRanking {
  books: Array<string>;

  constructor() {
    this.books = ['bookA','bookB'];
  }
}
