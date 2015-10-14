// book-ranking.ts
@View({
  directives: [RankedBook, NgFor],
  template: `
     <section class="new-link">
       <div class="control-group">
         <div><label for="title">Title:</label></div>
         <div><input name="title" #title></div>
       </div>
       <div class="control-group">
         <div><label for="link">Link:</label></div>
         <div><input name="link" #link/></div>
       </div>
       <button (click)="add(title, link)">Submit</button>
     </section>
     <book *ng-for="#book of books" [book]="book"></book>
   `
})
