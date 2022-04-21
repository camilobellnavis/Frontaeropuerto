import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  img = 'https://cdn-icons-png.flaticon.com/512/3324/3324544.png'
  constructor() { }

  ngOnInit(): void {
  }

}
