import {
  ChangeDetectionStrategy,
  Component,
  effect,
  signal,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus, faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-counter',
  imports: [FontAwesomeModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  protected readonly count = signal(0);
  protected readonly shouldAnimate = signal(false);

  increment() {
    this.count.update((c) => c + 1);
  }

  decrement() {
    this.count.update((c) => c - 1);
  }

  reset() {
    this.count.set(0);
  }

  protected readonly buttons = [
    {
      icon: faMinus,
      label: 'Diminuir',
      action: () => this.decrement(),
      className: 'btn btn-decrement',
      ariaLabel: 'Diminuir contador',
    },
    {
      icon: faSync,
      label: 'Reiniciar',
      action: () => this.reset(),
      className: 'btn btn-reset',
      ariaLabel: 'Reiniciar contador',
    },
    {
      icon: faPlus,
      label: 'Aumentar',
      action: () => this.increment(),
      className: 'btn btn-increment',
      ariaLabel: 'Aumentar contador',
    },
  ];

  private readonly setupAnimation = effect((onCleanup) => {
    this.count();

    this.shouldAnimate.set(true);

    const timer = setTimeout(() => {
      this.shouldAnimate.set(false);
    }, 300);

    onCleanup(() => clearTimeout(timer));
  });
}
