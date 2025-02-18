import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalWebsitePromotionComponent } from './local-website-promotion.component';

describe('LocalWebsitePromotionComponent', () => {
  let component: LocalWebsitePromotionComponent;
  let fixture: ComponentFixture<LocalWebsitePromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalWebsitePromotionComponent]
    });
    fixture = TestBed.createComponent(LocalWebsitePromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
