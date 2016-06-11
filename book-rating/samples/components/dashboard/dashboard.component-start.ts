// dashboard.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'br-dashboard',
  template: `<div>{{ books }}</div>`
})
export class DashboardComponent implements OnInit {

  books: string[];

  constructor(){}

  ngOnInit() {
    this.books = ['Angular 2', 'Aurelia'];
  }
}
