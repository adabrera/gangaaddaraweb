import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomSliderComponent } from './room-slider.component';

describe('RoomSliderComponent', () => {
  let component: RoomSliderComponent;
  let fixture: ComponentFixture<RoomSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
