import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleShopingAdPromotionComponent } from './google-shoping-ad-promotion.component';

describe('GoogleShopingAdPromotionComponent', () => {
  let component: GoogleShopingAdPromotionComponent;
  let fixture: ComponentFixture<GoogleShopingAdPromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleShopingAdPromotionComponent]
    });
    fixture = TestBed.createComponent(GoogleShopingAdPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
