import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../types/book';

@Component({
  selector: 'bs-books',
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {
  @Input('books') items: Book[];

  ngOnInit() {}
}
