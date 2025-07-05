import {
  ChangeDetectionStrategy,
  Component,
  computed,
  output,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus, faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-counter-actions',
  imports: [FontAwesomeModule],
  templateUrl: './counter-actions.component.html',
  styleUrl: './counter-actions.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterActionsComponent {
  increment = output<void>();
  decrement = output<void>();
  reset = output<void>();

  private readonly actions = {
    decrement: () => this.decrement.emit(),
    reset: () => this.reset.emit(),
    increment: () => this.increment.emit(),
  } as const;

  private readonly buttonsData = [
    {
      icon: faMinus,
      label: 'Diminuir',
      action: this.actions.decrement,
      class: 'btn-decrement',
      ariaLabel: 'Diminuir contador',
    },
    {
      icon: faSync,
      label: 'Reiniciar',
      action: this.actions.reset,
      class: 'btn-reset',
      ariaLabel: 'Reiniciar contador',
    },
    {
      icon: faPlus,
      label: 'Aumentar',
      action: this.actions.increment,
      class: 'btn-increment',
      ariaLabel: 'Aumentar contador',
    },
  ];

  protected readonly buttons = computed(() =>
    this.buttonsData.map((button) => ({
      ...button,
      computedClass: `btn ${button.class}`,
    }))
  );
}
