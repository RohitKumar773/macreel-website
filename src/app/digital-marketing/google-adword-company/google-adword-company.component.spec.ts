import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAdwordCompanyComponent } from './google-adword-company.component';

describe('GoogleAdwordCompanyComponent', () => {
  let component: GoogleAdwordCompanyComponent;
  let fixture: ComponentFixture<GoogleAdwordCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleAdwordCompanyComponent]
    });
    fixture = TestBed.createComponent(GoogleAdwordCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
