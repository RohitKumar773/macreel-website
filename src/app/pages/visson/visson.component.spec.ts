import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VissonComponent } from './visson.component';

describe('VissonComponent', () => {
  let component: VissonComponent;
  let fixture: ComponentFixture<VissonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VissonComponent]
    });
    fixture = TestBed.createComponent(VissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
