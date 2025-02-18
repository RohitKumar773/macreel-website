import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinPromotionComponent } from './linkedin-promotion.component';

describe('LinkedinPromotionComponent', () => {
  let component: LinkedinPromotionComponent;
  let fixture: ComponentFixture<LinkedinPromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkedinPromotionComponent]
    });
    fixture = TestBed.createComponent(LinkedinPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
