import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMarketingServiceComponent } from './google-marketing-service.component';

describe('GoogleMarketingServiceComponent', () => {
  let component: GoogleMarketingServiceComponent;
  let fixture: ComponentFixture<GoogleMarketingServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleMarketingServiceComponent]
    });
    fixture = TestBed.createComponent(GoogleMarketingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
