describe('...', () => {
    // ...
    describe('Rating a book', () => {
        let fixture: ComponentFixture<BookComponent>;

        beforeEach(() => {
          return builder
            .createAsync(BookComponentTestController)
            .then((_fixture_: ComponentFixture<BookComponent>) => {
              fixture = _fixture_;

              control = new FixtureControl(fixture);

              dashboard = fixture
                            .debugElement
                            .query(By.directive(BookComponent))
                            .componentInstance;

              dashboard.ngOnInit();
            });
        });
    });
});
