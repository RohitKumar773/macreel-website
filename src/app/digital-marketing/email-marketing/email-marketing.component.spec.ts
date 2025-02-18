import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailMarketingComponent } from './email-marketing.component';

describe('EmailMarketingComponent', () => {
  let component: EmailMarketingComponent;
  let fixture: ComponentFixture<EmailMarketingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailMarketingComponent]
    });
    fixture = TestBed.createComponent(EmailMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
