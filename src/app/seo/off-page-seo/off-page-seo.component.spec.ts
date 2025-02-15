import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffPageSeoComponent } from './off-page-seo.component';

describe('OffPageSeoComponent', () => {
  let component: OffPageSeoComponent;
  let fixture: ComponentFixture<OffPageSeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffPageSeoComponent]
    });
    fixture = TestBed.createComponent(OffPageSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
