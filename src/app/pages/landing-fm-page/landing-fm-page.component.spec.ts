import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFmPageComponent } from './landing-fm-page.component';

describe('LandingFmPageComponent', () => {
  let component: LandingFmPageComponent;
  let fixture: ComponentFixture<LandingFmPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingFmPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingFmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
