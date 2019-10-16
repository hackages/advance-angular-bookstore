import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bs-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  username: string;
  ngOnInit() {}
  logout() {}
}
