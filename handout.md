![Logo](img/DeveloperWeek2016.png)

# Angular 2 Workshop

Ihre Trainer:  Gregor Woiwode und Johannes Hoppe

<hr>

Wir entwickeln die Beispiel-Anwendung gegen folgendes Github-Repo:
### https://github.com/Angular2Buch/angular2-workshop-dwx16


## 1. Setup & Angular-CLI

Sie benötigen:

1. Visual Studio Code - https://code.visualstudio.com/
2. Node.js + NPM ab v4 - https://nodejs.org/

Folgende führen Sie bitte __gleich zu Beginn__ des Workshops aus:

```
npm install -g typings
npm install -g angular-cli@1.0.0-beta.6
```

````
ng -v
```

es muss folgende Version angezeigt werden: "1.0.0-beta.6"
Wenn dies NICHT der Fall ist, dann führen Sie bitte aus:

```
npm uninstall -g angular-cli
npm cache clean
npm install -g angular-cli@1.0.0-beta.6
```

Zum Abschluss bitte bereits im Arbeitsverzeichnis ausführen:

```
ng new book-rating
npm start
```

## 2. Angular-CLI Befehle

Für die Entwicklung benötigen Sie folgenden Kommandos:

Entwicklung  | Befehl
---       | ---
ng serve  | Webserver Starten & Builden
ng build  | Nur bauen
ng test   | Unit-Tests ausführen
Bugfix windows:<br>ng build && ng test --build=false | Unit-Tests ausführen
ng e2e    | Oberflächentests starten

Sie können die Angular-CLI verwenden, um diverse Bausteine generieren zu lassen:

Was Erzeugen  | Befehl
---       | ---
Component | `ng g component my-new-component`
Directive | `ng g directive my-new-directive`
Pipe      | `ng g pipe my-new-pipe`
Service   | `ng g service my-new-service`
Class     | `ng g class my-new-class`
Interface | `ng g interface my-new-interface`
Enum      | `ng g enum my-new-enum`






## 3. Die App

![App](img/app-full.png)

Wie entwickeln eine Anwendung um Bücher zu bewerten.
Die App wird schrittweise ausgebaut.
Die Anwendung besteht zum Anfang aus drei Komponenten:

![App](img/book-rating-components.png)


### 3.1 Angular Template-Syntax

Wir werden in diesem Workshop nur die wichtigsten Bindings verwenden.

Name               | Binding
------------------ | -------------------------------
Property-Binding   | [property]
Event-Binding      | (event)
Element-Referenzen | #idhandler
Bedingungen        | *ngIf="expression"
Schleifen          | *ngFor="expression"
Styling            | [class.nameOfClass]="expression" 



### 3.2 HTTP

Um Zugriffe auf ein Backend realisieren zu können, müssen asynchrone
Aufrufe auf die Serverschnittstelle (XMLHttpRequest) erfolgen.
Die Angular-Http-Klasse kapselt und vereinfacht das asynchrone Aufrufe per HTTP.

Den Teilnehmern steht folgende API zur Verfügung:
* http://book-monkey2-api.angular2buch.de/

Eine Beschreibung der Schnittstele gibt es hier:
* http://book-monkey2-api.angular2buch.de/swagger-ui/

Dies ist ein Beispiel wie man `http` quick-and-dirty verwendet.
Im Laufe des Workshops werden wir den Code
* als Service auslagern und
* Observables

verwenden.

```
// main.ts

import { HTTP_PROVIDERS } from '@angular/http';
bootstrap(AppComponent, [HTTP_PROVIDERS]);

```

```
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { Book } from '../shared';

@Component({
})
export class MyComponent {

  books: Book[];
  book: Book;

  constructor(private http: Http) {}

  getAllBooks() {

    this.http
      .get('http://book-monkey2-api.angular2buch.de/books') // PLURAL S!
      .subscribe(response => {
        this.books = response.json();
      });
  }

  getSingleBook(isbn) {

    this.http
      .get(`http://book-monkey2-api.angular2buch.de/book/${isbn}`) // kein PLURAL S!
      .subscribe(response => {
        this.book = response.json();
      });
    });
  }
}

```

<hr>


## Tests

Die `angular-cli` stellt uns ein fertige Testinfrastruktur zur Verfügung.
Es kann zwischen `2` Testansätzen für Komponenten unterschieden werden.

1. Für die Komponente kann ein Unit-Test geschrieben werden.
2. Die Komponete kann in Verbindung mit ihrem Template getestet werden (Wir sprechen hier von einem Integrationstest).

### Unit-Test

Für den Test müssen wir aus dem Angular Testing-Namespace die Funktionen `beforeEachProviders`, `describe`, `expect` und `it` laden.
Des Weiteren benötigen wir die zu Testende Komponente (hier: `BookComponent`), sowie Klassen, die diese Komponente nutzt (Bsp.: `Book`).

Mithilfe von `beforeEachProviders` wird die zu testende Komponente dem Test-Injector bekannt gemacht.
Danach können wir die API-Komponente testen. 

```typescript
import { beforeEachProviders, describe, expect, it } from '@angular/core/testing';

import {BookComponent} from './book.component';
import {Book} from '../shared';

describe('Rate a book', () => {
  beforeEachProviders(() => [BookComponent]);

  it('should increase the rating by one', () => {
    let component = new BookComponent();

    component.book = new Book('title', 'description');
    component.rateUp();

    expect(component.book.rating).toBe(1);
  });
});
```

### Integrationstest

Möchte man ebenfalls das Template in den Test einbeziehen wird das Test-Setup komplexer.
Der Grund ist, dass die Komponente samt Template im Test gerendered werden muss.

Als erstes wird ein Konsument benötigt der die zu testende Komponente lädt.
Die imports `ComponentFixture`, `TestComponentBuilder`, `provide`, `By` benötigen wir im Anschluss, um die Instanz der Komponente zu erstellen.

```typescript
// ... import beforeEach, etc.
import { ComponentFixture,  } from '@angular/compiler/testing';
import { provide } from '@angular/core';
import {  } from '@angular/platform-browser';

@Component({
  selector: 'test',
  template: `
    <br-dashboard></br-dashboard>
  `,
  directives: [DashboardComponent]
})
class DashboardComponentTestController { }
```

Um die Komponente instanziieren zu können, muss der TestComponentBuilder bereitgestellt werden.
Damit wir den Code für `TestComponentBuilder` nicht für jeden Test aufs neue schreiben müssen, nutzen wir den Hook `beforeEach`.
Dieser wird vor jedem Test ausgeführt.
Eine Referenz des `TestComponentBuilder` speichern wir im Feld `builder`.

```typescript
describe('DashboardComponent', () => {
    let builder: TestComponentBuilder;

    beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
      builder = tcb;
    }));
});
```

Nun ist es möglich die Komponente inkl. Template zu erstellen.
Zum einen erhalten wir eine Instanz von `ComponentFixture<T>` und speichern sie im Feld `fixture`.
`fixture` einen Kontext bereit, aus dem wir die gewünschte Komponente, abrufen können.
Des Weiteren können Aktionen im Template ausgeführt werden (Formular befüllen, Buttons klicken, ...).

*Übrigens* Enthalt eine Komponente mehrere Kindkompoenten können diese auch über die `ComponentFixture<T>` aufgelöst werden.

```typescript
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
```

Schließlich sind wir in der Lage den Test zu schreiben.
Wir nutzen klassische CSS-Selektoren um die Controls des Templates zu steurn.

```typescript
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
```

## 4. Übungen

## 4.1 - Eingaben erzwingen
> HTML-Elemente sind auch nur "Komponenten"

Stellen Sie sicher, dass das Formular nur versendet werden kann, wenn Titel und Beschreibung eingegeben wurden.
Nutzen sie `[disabled]`, um den Button zu deaktivieren.  

**Tipp** Auch bei Standard-HTML-Elementen können Property-Bindings eingesetzt werden.



### 4.1 - Das Dashboard aufräumen
> Eine neue Komponente erstellen

Lagern Sie das Formular zum erstellen eines Buchs in eine eigene Komponente `CreateBookForm` aus.
Stellen Sie sicher, dass diese Komponente das Ereignis `(book-created)` veröffentlicht, wenn ein Buch erstellt wurde.
Verarbeiten Sie das Ereignis in der `DashboardCompoent`, um das erstellte Buch der Liste hinzuzufügen. 

### 4.2 - Fachliche Anforderungen für unser Datenmodell
> Tests für das Model `Book` schreiben

Es wurde entschieden, dass der Wert eines Ratings nur zwischen `0` und `5` liegen darf.
Weisen sie mit einem Unit-Test nach, dass die fachliche Anforderung erfüllt ist.

```typescript
// /src/app/shared/book.spec.ts
describe('Rating a book', () => {
    it('should not be allowed to have a rating greater than 5', () => {
        // test
    });

     it('should not be possible have a rating smaller than 0', () => {
        // test
    });
});
```




## 4.4 - Hinweise bei Fehleingaben geben
> Ausgaben mit *ngIf

Blenden Sie einen Hinweis ein, wenn der Titel oder die Beschreibung keinen Wert haben
(Bsp.: Bitte geben Sie den Titel des Buchs ein).

## 4.5 - Funktionsweise des Dashboards sicherstellen
> Formulartests

## 4.6 - Gültige Eingaben positiv hervorheben
> Mit `[class]` CSS dynamisch setzen

Stellen Sie sicher, dass die Schriftfarbe innerhalb der Eingabefelder `grün` ist, wenn mehr als `3` Zeichen eingegeben wurden.

**Hinweis** Durch die Integration von bootstrap, dem CSS-Framework, kann die CSS-Klasse `text-success` eingesetzt.

## 4.7 - Bücherliste auswerten

Geben Sie, an einer geeigneten Stelle, die Gesamtzahl der im Dashboard gepflegten Bücher an.

## 4.8 - Fuknktionsweise des Dashboards sicherstellen
> Formulartests

Schreiben Sie einen Test für die `BookComponent`.

- Wenn ein Buch **positiv** bewertet wird, soll dessen Bewertung um `1` *höher* sein als zuvor. 
- Wenn ein Buch **negativ** bewertet wird, soll dessen Bewertung um `1` *niedriger* sein als zuvor.

## *. - Validator schreiben

Um sicherzustellen, dass der Titel eines Buchs nur ein Mal vorkommt, soll ein Validator `CheckUniqueTitle` implementiert werden.
Wenn der Titel beriets existeirt, soll das Formular nicht versendet werden dürfen.
Außerdem, soll folgende Nachricht angezeigt werden: 'Der Titel dieses Buchs existiert bereits.'
