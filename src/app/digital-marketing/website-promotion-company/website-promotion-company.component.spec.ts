import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitePromotionCompanyComponent } from './website-promotion-company.component';

describe('WebsitePromotionCompanyComponent', () => {
  let component: WebsitePromotionCompanyComponent;
  let fixture: ComponentFixture<WebsitePromotionCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsitePromotionCompanyComponent]
    });
    fixture = TestBed.createComponent(WebsitePromotionCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
