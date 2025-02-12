import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveWebComponent } from './responsive-web.component';

describe('ResponsiveWebComponent', () => {
  let component: ResponsiveWebComponent;
  let fixture: ComponentFixture<ResponsiveWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsiveWebComponent]
    });
    fixture = TestBed.createComponent(ResponsiveWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
