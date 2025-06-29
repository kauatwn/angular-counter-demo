import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterActionButtonComponent } from './counter-action-button.component';

describe('CounterActionButtonComponent', () => {
  let component: CounterActionButtonComponent;
  let fixture: ComponentFixture<CounterActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterActionButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
