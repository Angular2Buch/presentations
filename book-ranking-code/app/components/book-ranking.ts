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
         <div><label for="title">Title</label></div>
         <div><input name="title" #title></div>
       </div>
       <div class="control-group">
         <div><label for="link">Comment</label></div>
         <div><textarea name="comment" #comment></textarea></div>
       </div>
       <button (click)="add(title, comment)">Submit</button>
     </section>
     <book *ng-for="#book of books" [book]="book" (rated)="reorderBooks(book)"></book>
   `
})
export default class BookRanking {
  books: Array<Book>;

  constructor() {
    this.books = [
      new Book('Angular 2', 'Eine praktische Einführung'),
      new Book('Die Kunst des klugen Handelns', '52 Irrwege die Sie besser anderen überlassen.')
    ];
  }

  add(title, comment) {
    var newBook = new Book(title.value, comment.value);
    this.books.push(newBook);

    title.value = '';
    comment.value = '';
  }

  reorderBooks(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
