import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-counter-action-button',
  imports: [FontAwesomeModule],
  templateUrl: './counter-action-button.component.html',
  styleUrl: './counter-action-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterActionButtonComponent {
  icon = input.required<IconDefinition>();
  label = input.required<string>();
  class = input.required<string>();

  buttonClick = output<void>();

  buttonClasses = computed(() => `btn ${this.class()}`);

  onClick() {
    this.buttonClick.emit();
  }
}
