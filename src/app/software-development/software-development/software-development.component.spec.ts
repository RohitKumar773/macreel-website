import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDevelopmentComponent } from './software-development.component';

describe('SoftwareDevelopmentComponent', () => {
  let component: SoftwareDevelopmentComponent;
  let fixture: ComponentFixture<SoftwareDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoftwareDevelopmentComponent]
    });
    fixture = TestBed.createComponent(SoftwareDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
