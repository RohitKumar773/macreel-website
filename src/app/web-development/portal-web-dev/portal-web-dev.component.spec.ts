import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalWebDevComponent } from './portal-web-dev.component';

describe('PortalWebDevComponent', () => {
  let component: PortalWebDevComponent;
  let fixture: ComponentFixture<PortalWebDevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortalWebDevComponent]
    });
    fixture = TestBed.createComponent(PortalWebDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
