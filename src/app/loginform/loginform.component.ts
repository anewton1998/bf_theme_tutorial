import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.sass']
})
export class LoginformComponent implements OnInit {

  constructor() { }

  wait = false;

  ngOnInit() {
  }

  submit(form) {
    this.wait = true;
    setTimeout( () => {
      alert( `Email is ${form.value.email} and password is ${form.value.password}`);
      this.wait = false;
    }, 1000 );
    console.log('submit');
  }

}
