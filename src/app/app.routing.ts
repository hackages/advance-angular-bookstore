import { Routes } from '@angular/router';
import {
  DashboardComponent,
  BookDetailComponent,
  LoginComponent,
  LaptopstoreComponent,
  BookstoreComponent
} from './components';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'books',
    component: BookstoreComponent
  },
  {
    path: 'laptops',
    component: LaptopstoreComponent
  },
  {
    path: 'books/:id',
    component: BookDetailComponent
  }
];
