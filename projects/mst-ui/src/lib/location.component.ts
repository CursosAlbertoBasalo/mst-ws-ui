import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';

@Component({
  selector: 'mst-ui-location',
  standalone: true,
  template: `
    <span>
      📍at <strong>{{ value() }}</strong>
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {
  value: InputSignal<string> = input.required<string>();
}
// <mst-ui-location [value]="location"></mst-ui-location>
