import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  inject,
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
  private readonly destroyRef = inject(DestroyRef);

  value = input.required<number>();

  protected readonly shouldAnimate = signal(false);
  private animationTimeout?: ReturnType<typeof setTimeout>;

  constructor() {
    this.setupAnimation();
  }

  private setupAnimation(): void {
    effect(() => {
      // Reagir a mudanças no value
      this.value();

      // Limpar timeout anterior para evitar conflitos
      if (this.animationTimeout) {
        clearTimeout(this.animationTimeout);
      }

      // Ativar animação
      this.shouldAnimate.set(true);

      // Desativar animação após a duração da animação
      this.animationTimeout = setTimeout(() => {
        this.shouldAnimate.set(false);
      }, 300);
    });

    // Registrar cleanup usando DestroyRef
    this.destroyRef.onDestroy(() => {
      if (this.animationTimeout) {
        clearTimeout(this.animationTimeout);
      }
    });
  }
}
