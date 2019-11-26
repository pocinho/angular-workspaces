import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApphubLibWelcomeComponent } from './apphub-lib-welcome.component';

describe('ApphubLibWelcomeComponent', () => {
  let component: ApphubLibWelcomeComponent;
  let fixture: ComponentFixture<ApphubLibWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApphubLibWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApphubLibWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
