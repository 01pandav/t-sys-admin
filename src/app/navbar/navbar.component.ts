import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isChecked = true;
  hidden = false;
  breadcrumbTitle= "Tysytem";

 
  constructor() {}

  openLogoutDialog() {
  
  }
  toggleClass(){
      let body = document.getElementsByTagName('body')[0];
      body.classList.toggle('dark_theme');
  }
  ngOnInit(): void {
  }
}
