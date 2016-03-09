// dashboard.ts

/* [...] */
export class Dashboard {
  books: Book[];

  constructor() {
    this.books = [new Book('Angular 2', 'Eine praktische Einführung')];
  }

  add(title, comment) {
    var newBook = new Book(title.value, comment.value);
    this.books.push(newBook);

    title.value = '';
    comment.value = '';
  }
}
