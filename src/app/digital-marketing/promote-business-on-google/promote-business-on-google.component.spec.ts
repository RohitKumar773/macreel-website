import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteBusinessOnGoogleComponent } from './promote-business-on-google.component';

describe('PromoteBusinessOnGoogleComponent', () => {
  let component: PromoteBusinessOnGoogleComponent;
  let fixture: ComponentFixture<PromoteBusinessOnGoogleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromoteBusinessOnGoogleComponent]
    });
    fixture = TestBed.createComponent(PromoteBusinessOnGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
