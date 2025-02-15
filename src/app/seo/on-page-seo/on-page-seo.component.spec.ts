import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPageSeoComponent } from './on-page-seo.component';

describe('OnPageSeoComponent', () => {
  let component: OnPageSeoComponent;
  let fixture: ComponentFixture<OnPageSeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnPageSeoComponent]
    });
    fixture = TestBed.createComponent(OnPageSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
