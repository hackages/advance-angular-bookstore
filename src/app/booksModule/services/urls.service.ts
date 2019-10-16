import { InjectionToken } from '@angular/core';

export const SearchByTitleUrl = new InjectionToken('SearchByTitleUrl', {
  providedIn: 'root',
  factory: () => 'http://localhost:5000/books/?title='
});

export const BooksUrl = new InjectionToken('booksUrl', {
  providedIn: 'root',
  factory: () => 'http://localhost:5000/books'
});

export const BookUrl = new InjectionToken('bookUrl', {
  providedIn: 'root',
  factory: () => 'http://localhost:5000/books/:bookID'
});
