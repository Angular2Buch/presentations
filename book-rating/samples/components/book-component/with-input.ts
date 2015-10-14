// book-component.ts
import { Component, View } from 'angular2/angular2';
import Book from '../models/book';

@Component({
  selector: 'book',
  inputs: ['book'],
})
@View({
  template: `
    <div class="well">
      <div class="thumbnail pull-right">
        <img src="http://www.gravatar.com/avatar/BEWERTUNG?s=80&default=wavatar&forcedefault=1"/>
      </div>
      <h2>TITEL <small>Stars BEWERTUNG</small></h2>
      <p>KOMMENTAR</p>

    </div>
  `
})
export default class BookComponent {
  book: Book;
}
