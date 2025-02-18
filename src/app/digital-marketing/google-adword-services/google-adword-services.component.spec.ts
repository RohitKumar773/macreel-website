import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAdwordServicesComponent } from './google-adword-services.component';

describe('GoogleAdwordServicesComponent', () => {
  let component: GoogleAdwordServicesComponent;
  let fixture: ComponentFixture<GoogleAdwordServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleAdwordServicesComponent]
    });
    fixture = TestBed.createComponent(GoogleAdwordServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
