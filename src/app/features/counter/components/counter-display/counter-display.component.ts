import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-counter-display',
  imports: [],
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterDisplayComponent {
  readonly value = input.required<number>();
  protected readonly shouldAnimate = signal(false);

  private readonly setupAnimation = effect((onCleanup) => {
    this.value();

    this.shouldAnimate.set(true);

    const timer = setTimeout(() => {
      this.shouldAnimate.set(false);
    }, 300);

    onCleanup(() => clearTimeout(timer));
  });
}
