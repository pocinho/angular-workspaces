import { TestBed } from '@angular/core/testing';

import { ApphubLibBlogService } from './apphub-lib-blog.service';

describe('ApphubLibBlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApphubLibBlogService = TestBed.get(ApphubLibBlogService);
    expect(service).toBeTruthy();
  });
});
