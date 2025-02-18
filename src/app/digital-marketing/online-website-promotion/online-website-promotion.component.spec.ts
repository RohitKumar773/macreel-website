import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineWebsitePromotionComponent } from './online-website-promotion.component';

describe('OnlineWebsitePromotionComponent', () => {
  let component: OnlineWebsitePromotionComponent;
  let fixture: ComponentFixture<OnlineWebsitePromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineWebsitePromotionComponent]
    });
    fixture = TestBed.createComponent(OnlineWebsitePromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
