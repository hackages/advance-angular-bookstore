import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Book } from './../../../types/book';
@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent implements OnInit {
  book: Book;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private location: Location) {
    const title = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]);
    this.form = new FormGroup({ title });
  }

  ngOnInit() {
    this.book = this.route.snapshot.data.book;
    this.form.get('title').setValue(this.book.title);
  }

  goBack() {
    this.location.back();
  }

  save() {
    throw Error('not yet implemented...');
  }
}
