import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  constructor() { }

  ngOnInit() {
  }

}
