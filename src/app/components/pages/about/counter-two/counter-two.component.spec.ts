import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTwoComponent } from './counter-two.component';

describe('CounterTwoComponent', () => {
  let component: CounterTwoComponent;
  let fixture: ComponentFixture<CounterTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
