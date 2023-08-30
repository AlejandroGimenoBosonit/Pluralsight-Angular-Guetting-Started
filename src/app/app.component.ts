/**
 * * Imports
 */
import { Component } from '@angular/core';
 
/**
 * * Decorators
 * A function that adds metadata to a class, its members, or its method arguments
 */
@Component({ // decorator
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * * Class
 */
export class AppComponent {
  pageTitle: string = 'Acme Product Manager';
}
