// book.component.ts
@Component({
  moduleId: module.id,
  selector: 'br-book',
  templateUrl: 'book.component.html'
})
export class BookComponent {
  @Input() book: Book;
  @Output() rated: EventEmitter<Book>;

  constructor() {
    this.rated = new EventEmitter<Book>();
  }

  rateUp() {
    this.book.rateUp();
    this.rated.emit(this.book);
  }

  rateDown() {
    this.book.rateDown();
    this.rated.emit(this.book);
  }
}
