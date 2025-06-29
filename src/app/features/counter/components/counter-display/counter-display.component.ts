import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  imports: [],
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterDisplayComponent {
  value = input.required<number>();
}
