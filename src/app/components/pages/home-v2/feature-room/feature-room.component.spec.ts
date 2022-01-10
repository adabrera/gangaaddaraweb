import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureRoomComponent } from './feature-room.component';

describe('FeatureRoomComponent', () => {
  let component: FeatureRoomComponent;
  let fixture: ComponentFixture<FeatureRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
