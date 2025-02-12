import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicWebComponent } from './dynamic-web.component';

describe('DynamicWebComponent', () => {
  let component: DynamicWebComponent;
  let fixture: ComponentFixture<DynamicWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicWebComponent]
    });
    fixture = TestBed.createComponent(DynamicWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
