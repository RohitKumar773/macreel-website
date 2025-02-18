import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPromotionCompanyComponent } from './web-promotion-company.component';

describe('WebPromotionCompanyComponent', () => {
  let component: WebPromotionCompanyComponent;
  let fixture: ComponentFixture<WebPromotionCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebPromotionCompanyComponent]
    });
    fixture = TestBed.createComponent(WebPromotionCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
