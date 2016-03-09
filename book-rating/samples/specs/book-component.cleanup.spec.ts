import {it, describe, expect, inject, injectAsync, beforeEach, TestComponentBuilder} from 'angular2/testing';
import {BookComponent} from './book-component';
import {Book} from '../../models/book';

//START
describe('BookComponent', () => {

  var compBuilder: TestComponentBuilder;
  beforeEach(inject([TestComponentBuilder], _compBuilder_ => {
    compBuilder = _compBuilder_;
  }));

  it('should ...', injectAsync([], () => {
    return compBuilder
      .createAsync(BookComponent)
      .then((fixture) => {

        fixture.detectChanges();
      });
  }));
});
//STOP
