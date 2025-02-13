import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryFormComponent } from './enquiry-form.component';

describe('EnquiryFormComponent', () => {
  let component: EnquiryFormComponent;
  let fixture: ComponentFixture<EnquiryFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnquiryFormComponent]
    });
    fixture = TestBed.createComponent(EnquiryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
