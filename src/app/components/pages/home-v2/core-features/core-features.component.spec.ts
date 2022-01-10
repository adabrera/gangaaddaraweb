import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreFeaturesComponent } from './core-features.component';

describe('CoreFeaturesComponent', () => {
  let component: CoreFeaturesComponent;
  let fixture: ComponentFixture<CoreFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
