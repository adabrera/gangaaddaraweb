import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoWrapComponent } from './video-wrap.component';

describe('VideoWrapComponent', () => {
  let component: VideoWrapComponent;
  let fixture: ComponentFixture<VideoWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoWrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
