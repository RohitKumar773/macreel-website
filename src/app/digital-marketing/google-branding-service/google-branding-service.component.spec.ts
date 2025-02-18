import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleBrandingServiceComponent } from './google-branding-service.component';

describe('GoogleBrandingServiceComponent', () => {
  let component: GoogleBrandingServiceComponent;
  let fixture: ComponentFixture<GoogleBrandingServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleBrandingServiceComponent]
    });
    fixture = TestBed.createComponent(GoogleBrandingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
