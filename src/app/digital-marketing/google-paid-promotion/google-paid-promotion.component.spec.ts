import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePaidPromotionComponent } from './google-paid-promotion.component';

describe('GooglePaidPromotionComponent', () => {
  let component: GooglePaidPromotionComponent;
  let fixture: ComponentFixture<GooglePaidPromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GooglePaidPromotionComponent]
    });
    fixture = TestBed.createComponent(GooglePaidPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
