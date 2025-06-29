import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus, faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-counter-controls',
  imports: [FontAwesomeModule],
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterControlsComponent {
  increment = output<void>();
  decrement = output<void>();
  reset = output<void>();

  faMinus = faMinus;
  faPlus = faPlus;
  faSync = faSync;
}
