import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterFooterComponent } from './counter-footer.component';

describe('CounterFooterComponent', () => {
  let component: CounterFooterComponent;
  let fixture: ComponentFixture<CounterFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
