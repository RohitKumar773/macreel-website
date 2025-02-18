import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePlusPromotionComponent } from './google-plus-promotion.component';

describe('GooglePlusPromotionComponent', () => {
  let component: GooglePlusPromotionComponent;
  let fixture: ComponentFixture<GooglePlusPromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GooglePlusPromotionComponent]
    });
    fixture = TestBed.createComponent(GooglePlusPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
