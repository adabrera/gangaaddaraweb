import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesDetailsComponent } from './places-details.component';

describe('PlacesDetailsComponent', () => {
  let component: PlacesDetailsComponent;
  let fixture: ComponentFixture<PlacesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
