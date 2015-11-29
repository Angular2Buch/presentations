// book-component.ts
import { Component, View, Input } from 'angular2/angular2';
import Book from '../models/book';

@Component({
  selector: 'book'
})
@View({
  template: `
    <div class="well">
      <div class="thumbnail pull-right">
        <img src="//gravatar.com/avatar/__BEWERTUNG__?s=80&default=wavatar"/>
      </div>
      <h2>__TITEL__ <small>Stars __BEWERTUNG__</small></h2>
      <p>__KOMMENTAR__</p>

    </div>
  `
})
export default class BookComponent {
  @Input() book: Book;
}
