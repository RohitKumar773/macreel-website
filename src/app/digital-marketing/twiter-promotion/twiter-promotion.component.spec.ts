import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwiterPromotionComponent } from './twiter-promotion.component';

describe('TwiterPromotionComponent', () => {
  let component: TwiterPromotionComponent;
  let fixture: ComponentFixture<TwiterPromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwiterPromotionComponent]
    });
    fixture = TestBed.createComponent(TwiterPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
