import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'src/app/authModule/auth.module#AuthModule'
  },
  {
    path: 'laptops',
    loadChildren: 'src/app/laptopsModule/laptops.module#LaptopsModule'
  },
  {
    path: 'books',
    loadChildren: 'src/app/booksModule/books.module',
    data: {
      preload: true
    }
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];
