import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramPromotionComponent } from './instagram-promotion.component';

describe('InstagramPromotionComponent', () => {
  let component: InstagramPromotionComponent;
  let fixture: ComponentFixture<InstagramPromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstagramPromotionComponent]
    });
    fixture = TestBed.createComponent(InstagramPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
