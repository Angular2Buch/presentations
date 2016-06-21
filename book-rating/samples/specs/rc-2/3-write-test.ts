describe('Rating a book', () => {
    it('creates a new of the book', () => {
      fixture.nativeElement.querySelector('input.form-control[name="title"]')
             .setAttribute('value', 'Angular 2');

      fixture.nativeElement.querySelector('textarea.form-control[name="comment"]')
             .innerHTML = 'Workshop';

      fixture.nativeElement.querySelector('button.btn.btn-danger')
             .dispatchEvent(new Event('click'));

      expect(dashboard.books.length).toEqual(3);
    });
});
