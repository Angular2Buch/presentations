// dashboard.ts
/* [...] */

@Component({
  selector: 'dashboard',
  directives: [BookComponent],
  template: `
     <!-- ... -->
     <book ... (rated)="reorderBooks($event)"></book>
   `
})
export class Dashboard {
  /* [...] */

  reorderBooks(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
