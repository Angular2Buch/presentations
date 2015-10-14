export default class Book {
  title: string;
  link: string;
  rating: number = 0;

  constructor(title, link) {
    this.title = title;
    this.link = link;
  }
}
