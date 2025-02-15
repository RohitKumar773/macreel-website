import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBuildingServiceComponent } from './link-building-service.component';

describe('LinkBuildingServiceComponent', () => {
  let component: LinkBuildingServiceComponent;
  let fixture: ComponentFixture<LinkBuildingServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkBuildingServiceComponent]
    });
    fixture = TestBed.createComponent(LinkBuildingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
