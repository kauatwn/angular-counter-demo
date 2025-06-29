import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-counter-footer',
  imports: [],
  templateUrl: './counter-footer.component.html',
  styleUrl: './counter-footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterFooterComponent {}
