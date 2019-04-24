import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.css']
})
export class HeaderFormComponent implements OnInit {
  customerName: string;
  greeting = 'What is your name?';
  constructor() { }

  ngOnInit() {
  }

  clicked() {
    if (this.customerName) {
      this.greeting = 'Hello ' + this.customerName;
      this.customerName = '';
    }
  }

}
