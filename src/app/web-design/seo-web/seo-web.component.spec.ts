import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoWebComponent } from './seo-web.component';

describe('SeoWebComponent', () => {
  let component: SeoWebComponent;
  let fixture: ComponentFixture<SeoWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeoWebComponent]
    });
    fixture = TestBed.createComponent(SeoWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
