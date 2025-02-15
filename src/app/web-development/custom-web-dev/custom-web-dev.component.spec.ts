import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomWebDevComponent } from './custom-web-dev.component';

describe('CustomWebDevComponent', () => {
  let component: CustomWebDevComponent;
  let fixture: ComponentFixture<CustomWebDevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomWebDevComponent]
    });
    fixture = TestBed.createComponent(CustomWebDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
