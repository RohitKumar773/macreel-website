import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidComponent } from './android.component';

describe('AndroidComponent', () => {
  let component: AndroidComponent;
  let fixture: ComponentFixture<AndroidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndroidComponent]
    });
    fixture = TestBed.createComponent(AndroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
