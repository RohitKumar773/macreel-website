import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceSeoComponent } from './ecommerce-seo.component';

describe('EcommerceSeoComponent', () => {
  let component: EcommerceSeoComponent;
  let fixture: ComponentFixture<EcommerceSeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcommerceSeoComponent]
    });
    fixture = TestBed.createComponent(EcommerceSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
