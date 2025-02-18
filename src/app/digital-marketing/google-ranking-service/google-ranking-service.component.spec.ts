import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleRankingServiceComponent } from './google-ranking-service.component';

describe('GoogleRankingServiceComponent', () => {
  let component: GoogleRankingServiceComponent;
  let fixture: ComponentFixture<GoogleRankingServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleRankingServiceComponent]
    });
    fixture = TestBed.createComponent(GoogleRankingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
