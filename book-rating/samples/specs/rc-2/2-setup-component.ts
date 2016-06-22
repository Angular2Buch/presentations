describe('...', () => {
    let builder: TestComponentBuilder;
    // beforeEach -> TestComponentBuilder

    describe('Rating a book', () => {
        let fixture: ComponentFixture<Dasboard>;
        let dashboard: DashboardComponent;
        
        beforeEach(() => {
          return builder
            .createAsync(DasboardTestController)
            .then((_fixture_: ComponentFixture<Dasboard>) => {
              fixture = _fixture_;

              control = new FixtureControl(fixture);

              dashboard = fixture
                            .debugElement
                            .query(By.directive(Dasboard))
                            .componentInstance;

              dashboard.ngOnInit();
            });
        });
    });
});
