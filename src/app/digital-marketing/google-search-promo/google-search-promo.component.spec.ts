import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSearchPromoComponent } from './google-search-promo.component';

describe('GoogleSearchPromoComponent', () => {
  let component: GoogleSearchPromoComponent;
  let fixture: ComponentFixture<GoogleSearchPromoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleSearchPromoComponent]
    });
    fixture = TestBed.createComponent(GoogleSearchPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
