// book.component.ts
import { Component, Input } from '@angular/core';
import { Book } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'br-book',
  templateUrl: 'book.component.html'
})
export class BookComponent {
  @Input() book: Book;   // <--- @Input() decorator

  constructor() { }
}
