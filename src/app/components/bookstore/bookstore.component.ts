import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { BookService } from '../../services/books.service';
import { Book } from '../../../types/book';

@Component({
  selector: 'bs-bookstore',
  templateUrl: './bookstore.component.html'
})
export class BookstoreComponent implements OnInit {
  books$: Observable<Book[]> = of([]);

  constructor(private bs: BookService) {}

  ngOnInit(): void {
    this.books$ = this.bs.getBooks();
  }

  search(term: string) {}
}
