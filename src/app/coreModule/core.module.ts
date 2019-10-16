import { Observable, of } from 'rxjs';
import { AuthModule } from './../authModule/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../sharedModule/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShellComponent } from './components/shell/shell.component';
import { routes } from './core.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { RouterModule, PreloadingStrategy, Route } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class BooksPreloader implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    console.log(route);
    return route.data && route.data.preload ? load() : of(null);
  }
}

@NgModule({
  declarations: [ShellComponent, DashboardComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: BooksPreloader
    })
  ],
  bootstrap: [ShellComponent]
})
export class CoreModule {}
