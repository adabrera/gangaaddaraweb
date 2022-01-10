import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesBoxComponent } from './places-box.component';

describe('PlacesBoxComponent', () => {
  let component: PlacesBoxComponent;
  let fixture: ComponentFixture<PlacesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
