// book-ranking.ts
export default class BookRanking {
  books: Array<Book>;
  constructor() {
    this.books = [
      new Book('ExampleBook', 'http://mybook.org'),
    ];
  }
  add(title, link) {
    this.books.push(new Book(title.value, link.value););

    title.value = '';
    link.value = '';
  }
}
