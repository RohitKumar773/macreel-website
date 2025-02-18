import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePromotionServiceComponent } from './google-promotion-service.component';

describe('GooglePromotionServiceComponent', () => {
  let component: GooglePromotionServiceComponent;
  let fixture: ComponentFixture<GooglePromotionServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GooglePromotionServiceComponent]
    });
    fixture = TestBed.createComponent(GooglePromotionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
