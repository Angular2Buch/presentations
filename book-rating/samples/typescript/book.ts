class Book {
  title: string;
  comment: string;
  rating: number = 0;

  // TODO: constructor shorthand
  constructor(title: string, comment: string) {
    this.title = title;
    this.comment = comment;
  }

  rateUp() {
    this.rating++;
  }
}
