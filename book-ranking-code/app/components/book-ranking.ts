import {Component, View, NgFor} from 'angular2/angular2';
import Book from '../models/book';
import BookComponent from './book-component';

@Component({
  selector: 'book-ranking'
})
@View({
  directives: [BookComponent, NgFor],
  template: `
     <section class="new-link">
       <div class="control-group">
         <div><label for="title">Title:</label></div>
         <div><input name="title" #title></div>
       </div>
       <div class="control-group">
         <div><label for="link">Link:</label></div>
         <div><input name="link" #link/></div>
       </div>
       <button (click)="add(title, link)">Submit</button>
     </section>
     <book *ng-for="#book of books" [book]="book"></book>
   `
})
export default class BookRanking {
  books: Array<Book>;

  constructor() {
    this.books = [
      new Book('ExampleBook', 'http://mybook.org'),
      new Book('AnotherExample', 'http://yourbook.com')
    ];
  }

  add(title, link) {
    var newBook = new Book(title.value, link.value);
    this.books.push(newBook);

    title.value = '';
    link.value = '';
  }
}
