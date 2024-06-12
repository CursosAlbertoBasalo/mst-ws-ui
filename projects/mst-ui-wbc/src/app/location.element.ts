import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LocationComponent } from '../../../mst-ui/src/public-api';

@Component({
  standalone: true,
  imports: [LocationComponent],
  template: `<mst-ui-location [value]="value"></mst-ui-location>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationElement {
  @Input() value: string = '';
}
