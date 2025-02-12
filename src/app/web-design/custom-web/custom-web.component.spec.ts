import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomWebComponent } from './custom-web.component';

describe('CustomWebComponent', () => {
  let component: CustomWebComponent;
  let fixture: ComponentFixture<CustomWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomWebComponent]
    });
    fixture = TestBed.createComponent(CustomWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
