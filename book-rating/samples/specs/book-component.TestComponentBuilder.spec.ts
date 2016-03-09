import {it, describe, expect, inject, injectAsync, beforeEach, TestComponentBuilder} from 'angular2/testing';
import {provide} from 'angular2/core';
import {BookComponent} from './book-component';
import {Book} from '../../models/book';

describe('BookComponent', () => {

  var compBuilder: TestComponentBuilder;

  beforeEach(inject([TestComponentBuilder], _compBuilder_ => {
    compBuilder = _compBuilder_;
  }));

  //START
  it('should fire rated-event on rateUp click', injectAsync([], () => {
    return compBuilder
      .createAsync(BookComponent)
      .then((fixture) => {

        // given a component instance with an initialized book input
        var bookCmp = fixture.componentInstance;
        bookCmp.book = new Book('Test Title', 'Test Comment');

        // we fake the event emitter with a spy
        spyOn(bookCmp.rated, 'emit');

        // when we click on rateUp button
        var button = fixture.nativeElement.querySelector('button:first-of-type');
        button.dispatchEvent(new Event('click'));

        // we trigger the change detection
        fixture.detectChanges();

        // then the event emitter should have fired an event
        expect(bookCmp.rated.emit).toHaveBeenCalled();
      });
  }));
  //STOP
});
