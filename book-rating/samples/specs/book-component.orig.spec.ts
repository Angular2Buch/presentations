import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {BookComponent} from './book-component';

//START
describe('BookComponent', () => {

  it('should ...', injectAsync([TestComponentBuilder],
      (tcb:TestComponentBuilder) => {
    return tcb.createAsync(BookComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));
});
//STOP
