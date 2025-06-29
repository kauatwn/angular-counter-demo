import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-counter-header',
  imports: [],
  templateUrl: './counter-header.component.html',
  styleUrl: './counter-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterHeaderComponent {}
