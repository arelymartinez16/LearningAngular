import { Component } from '@angular/core';

// Define component decorator
@Component({
  selector: 'pm-root',
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `
})

// Creating class
export class AppComponent {
  pageTitle: string = "Acme Product Management"
}