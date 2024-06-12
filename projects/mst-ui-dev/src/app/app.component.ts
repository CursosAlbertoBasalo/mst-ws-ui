import { Component } from '@angular/core';
import { LocationComponent } from '../../../mst-ui/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LocationComponent],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <mst-ui-location [value]="location"></mst-ui-location>
  `,
  styles: [],
})
export class AppComponent {
  title = 'mst-ui-dev';
  location = 'Madrid, Spain';
}
