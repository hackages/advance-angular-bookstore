import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';
import { Book } from '../../types/book';
@Injectable()
export class BookService {
  booksUrl: string = 'app/books';
  searchByTitleUrl: string = 'app/books/?title=';
  constructor(private http: HttpClient) {}

  // Gets all the books from our mock server
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  search(term$: Observable<string>): Observable<Book[]> {
    return term$.pipe(
      startWith(''),
      switchMap(term => this.http.get<Book[]>(this.searchByTitleUrl + term))
    );
  }

  // Gets a book by its id from our mock server
  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(this.booksUrl + '/' + id);
  }
}
