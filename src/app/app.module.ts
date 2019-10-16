import { BookService } from './services/books.service';
import { LoginComponent } from './components/login/login.component';
import { routes } from './app.routing';
import { InMemoryDataService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  SearchComponentComponent,
  BooksComponent,
  HeaderComponent,
  DashboardComponent,
  BookDetailComponent,
  BookstoreComponent,
  LaptopstoreComponent
} from './components';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    BooksComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    BookDetailComponent,
    BookstoreComponent,
    LaptopstoreComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
    BrowserModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
