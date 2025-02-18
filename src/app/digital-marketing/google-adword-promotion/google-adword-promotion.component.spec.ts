import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAdwordPromotionComponent } from './google-adword-promotion.component';

describe('GoogleAdwordPromotionComponent', () => {
  let component: GoogleAdwordPromotionComponent;
  let fixture: ComponentFixture<GoogleAdwordPromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleAdwordPromotionComponent]
    });
    fixture = TestBed.createComponent(GoogleAdwordPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
