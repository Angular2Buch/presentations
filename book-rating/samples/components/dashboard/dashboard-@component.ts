// dashboard.ts
@Component({
  selector: 'dashboard',
  directives: [BookComponent],
  template: `
     <div class="form">
       <div class="form-group">
         <div><label for="title">Title</label></div>
         <div><input class="form-control" name="title" #title></div>
       </div>
       <div class="form-group">
         <div><label for="link">Comment</label></div>
         <div><textarea class="form-control" name="comment" #comment></textarea></div>
       </div>
       <div class="form-group">
        <button (click)="add(title, comment)" class="btn btn-danger">Submit</button>
       </div>
     </div>

     <hr>
     <book *ngFor="#book of books" [book]="book"></book>`
})
/* [...] */
