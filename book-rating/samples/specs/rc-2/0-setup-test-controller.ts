// ... import beforeEach, etc.
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { provide } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'test',
  template: `
    <br-dashboard></br-dashboard>
  `,
  directives: [DashboardComponent]
})
class DashboardComponentTestController { }
