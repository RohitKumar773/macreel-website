import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookPromotionComponent } from './facebook-promotion.component';

describe('FacebookPromotionComponent', () => {
  let component: FacebookPromotionComponent;
  let fixture: ComponentFixture<FacebookPromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacebookPromotionComponent]
    });
    fixture = TestBed.createComponent(FacebookPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
