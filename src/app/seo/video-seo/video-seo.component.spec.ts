import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSeoComponent } from './video-seo.component';

describe('VideoSeoComponent', () => {
  let component: VideoSeoComponent;
  let fixture: ComponentFixture<VideoSeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoSeoComponent]
    });
    fixture = TestBed.createComponent(VideoSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
