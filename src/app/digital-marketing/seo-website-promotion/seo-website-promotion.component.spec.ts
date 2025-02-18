import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoWebsitePromotionComponent } from './seo-website-promotion.component';

describe('SeoWebsitePromotionComponent', () => {
  let component: SeoWebsitePromotionComponent;
  let fixture: ComponentFixture<SeoWebsitePromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeoWebsitePromotionComponent]
    });
    fixture = TestBed.createComponent(SeoWebsitePromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
