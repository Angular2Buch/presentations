// dashboard.component.ts
@Component({
  /* [...] */
})
export class DashboardComponent implements OnInit {

  books: Book[];

  add(title, comment) {
    var newBook = new Book(title.value, comment.value);
    this.books.push(newBook);
    title.value = comment.value = '';
  }
}
