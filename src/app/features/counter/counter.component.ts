import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CounterControlsComponent } from './components/counter-controls/counter-controls.component';
import { CounterDisplayComponent } from './components/counter-display/counter-display.component';
import { CounterFooterComponent } from './components/counter-footer/counter-footer.component';
import { CounterHeaderComponent } from './components/counter-header/counter-header.component';

@Component({
  selector: 'app-counter',
  imports: [
    CounterHeaderComponent,
    CounterDisplayComponent,
    CounterControlsComponent,
    CounterFooterComponent,
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  count = signal(0);

  increment() {
    this.count.update((c) => c + 1);
  }

  decrement() {
    this.count.update((c) => c - 1);
  }

  reset() {
    this.count.set(0);
  }
}
