import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePage2Component } from './welcome-page2.component';

describe('WelcomePage2Component', () => {
  let component: WelcomePage2Component;
  let fixture: ComponentFixture<WelcomePage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomePage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
