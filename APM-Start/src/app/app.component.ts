import { Component } from '@angular/core';

// Define component decorator
@Component({
  selector: 'pm-root',
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <div>My First component</div>
  </div>
  `
})

// Creating class
export class AppComponent {
  pageTitle: string = "Acme Product Management"
}