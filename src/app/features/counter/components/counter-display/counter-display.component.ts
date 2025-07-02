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
  value = input.required<number>();

  protected readonly shouldAnimate = signal(false);
  private animationTimeout?: ReturnType<typeof setTimeout>;

  // Effect como propriedade - abordagem moderna e declarativa
  private setupAnimation = effect((onCleanup) => {
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

    // Cleanup function seguindo a documentação oficial do Angular
    onCleanup(() => {
      if (this.animationTimeout) {
        clearTimeout(this.animationTimeout);
      }
    });
  });
}
