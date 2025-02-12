import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesignWebComponent } from './redesign-web.component';

describe('RedesignWebComponent', () => {
  let component: RedesignWebComponent;
  let fixture: ComponentFixture<RedesignWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedesignWebComponent]
    });
    fixture = TestBed.createComponent(RedesignWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
