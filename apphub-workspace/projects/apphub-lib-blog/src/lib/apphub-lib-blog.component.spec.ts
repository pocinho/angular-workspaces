import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApphubLibBlogComponent } from './apphub-lib-blog.component';

describe('ApphubLibBlogComponent', () => {
  let component: ApphubLibBlogComponent;
  let fixture: ComponentFixture<ApphubLibBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApphubLibBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApphubLibBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
