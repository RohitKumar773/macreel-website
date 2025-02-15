import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStoreOptimizationComponent } from './app-store-optimization.component';

describe('AppStoreOptimizationComponent', () => {
  let component: AppStoreOptimizationComponent;
  let fixture: ComponentFixture<AppStoreOptimizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppStoreOptimizationComponent]
    });
    fixture = TestBed.createComponent(AppStoreOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
