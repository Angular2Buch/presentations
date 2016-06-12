# Spickzettel

## Angular-CLI (master)

* git clone https://github.com/angular/angular-cli.git angular-cli
* cd angular-cli
* git checkout 01e31ab71cb8f37474edac40f4636638738aee19
* npm link


# New Project

* ng new book-rating --skip-git
* cd book-rating
* npm link angular-cli
* npm start

# Bootstrap (UI)

* npm install bootstrap@3.3.6 --save
  * CHANGE angular-cli-build.js: `'bootstrap/dist/**`
  * ADD index.html: <link rel="stylesheet" href="vendor/bootstrap/dist/css/bootstrap.css">
  * ADD index.html: <body class="container">
  * ADD optional SVG + h1

# Dashboard

* ng generate component dashboard
* CHANGE dashboard.component.ts: neuer Selektor: br-dashboard + `this.books = ['Angular 2', 'AngularJS 1'];`
* CHANGE dashboard.component.ts: `template: '{{ books }}'`
* ADD app.component.ts: `import { DashboardComponent } from './dashboard'`
* CHANGE app.component.ts: `template: '<br-dashboard></br-dashboard>',`
* ADD app.component.ts: `directives: [DashboardComponent]`

# Book component (Property binding)

* ng generate class shared/book
* ```
  export class Book {
      constructor(public title: string,
                  public description: string,
                  public rating: number = 0) { }
  }```
* ng generate component book
* CHANGE BookComponent according to book.component-property-binding[.ts|.html]
* CHANGE dashboard.component.ts (`dashboard.component-mini.ts` from slides)
* mehrere bücher:
  * Array of books[]!
  * `<br-book [information]="book" *ngFor="let book of books; let i = index"></br-book>`


# Dashboard component (Event binding)

* ADD templateUrl: --> `dashboard.component-event-binding`
* ADD `add(title, comment) {}`

# Running TESTS
* `ng build && ng test --build=false` see https://github.com/angular/angular-cli/issues/864
