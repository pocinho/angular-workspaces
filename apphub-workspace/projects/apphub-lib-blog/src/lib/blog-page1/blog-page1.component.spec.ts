import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPage1Component } from './blog-page1.component';

describe('BlogPage1Component', () => {
  let component: BlogPage1Component;
  let fixture: ComponentFixture<BlogPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
