import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePage1Component } from './welcome-page1.component';

describe('WelcomePage1Component', () => {
  let component: WelcomePage1Component;
  let fixture: ComponentFixture<WelcomePage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomePage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
