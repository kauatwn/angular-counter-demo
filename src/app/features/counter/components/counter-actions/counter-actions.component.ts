import {
  ChangeDetectionStrategy,
  Component,
  output,
  signal,
} from '@angular/core';
import { faMinus, faPlus, faSync } from '@fortawesome/free-solid-svg-icons';
import { CounterActionButtonComponent } from '../counter-action-button/counter-action-button.component';

@Component({
  selector: 'app-counter-actions',
  imports: [CounterActionButtonComponent],
  templateUrl: './counter-actions.component.html',
  styleUrl: './counter-actions.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterActionsComponent {
  increment = output<void>();
  decrement = output<void>();
  reset = output<void>();

  buttons = signal([
    {
      icon: faMinus,
      label: 'Diminuir',
      action: 'decrement',
      class: 'btn-decrement',
    },
    {
      icon: faSync,
      label: 'Reiniciar',
      action: 'reset',
      class: 'btn-reset',
    },
    {
      icon: faPlus,
      label: 'Aumentar',
      action: 'increment',
      class: 'btn-increment',
    },
  ]);

  private readonly actionMap = {
    increment: () => this.increment.emit(),
    decrement: () => this.decrement.emit(),
    reset: () => this.reset.emit(),
  } as const;

  onButtonClick(action: string) {
    const actionHandler = this.actionMap[action as keyof typeof this.actionMap];
    actionHandler?.();
  }
}
