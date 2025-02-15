import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsWebDevComponent } from './cms-web-dev.component';

describe('CmsWebDevComponent', () => {
  let component: CmsWebDevComponent;
  let fixture: ComponentFixture<CmsWebDevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmsWebDevComponent]
    });
    fixture = TestBed.createComponent(CmsWebDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
