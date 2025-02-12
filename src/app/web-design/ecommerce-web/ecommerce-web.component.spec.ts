import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceWebComponent } from './ecommerce-web.component';

describe('EcommerceWebComponent', () => {
  let component: EcommerceWebComponent;
  let fixture: ComponentFixture<EcommerceWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcommerceWebComponent]
    });
    fixture = TestBed.createComponent(EcommerceWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
