import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  themeClass = localStorage.getItem( 'classNameOfTheme' );

  constructor() { }

  ngOnInit() {
  }

  changeTheme(theme) {
    this.themeClass = theme;
    localStorage.setItem('classNameOfTheme', this.themeClass);
  }

}
