import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticWebComponent } from './static-web.component';

describe('StaticWebComponent', () => {
  let component: StaticWebComponent;
  let fixture: ComponentFixture<StaticWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaticWebComponent]
    });
    fixture = TestBed.createComponent(StaticWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
