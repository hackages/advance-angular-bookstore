import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../sharedModule/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  BookDetailComponent,
  BooksComponent,
  BookstoreComponent
} from './components';
import { RouterModule } from '@angular/router';
import { routes } from './books.routing';

@NgModule({
  declarations: [BookDetailComponent, BooksComponent, BookstoreComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export default class BooksModule {}
