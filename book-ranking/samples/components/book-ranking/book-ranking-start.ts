import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'book-ranking'
})
@View({
  directives: [BookComponent, NgFor],
  template: `
    <h1>Bücher</h1>
    <p>{{ books }}</p>
   `
})
export default class BookRanking {
  books: Array<string>;

  constructor() {
    this.books = ['Angular 2', 'Aurelia'];
  }
}
