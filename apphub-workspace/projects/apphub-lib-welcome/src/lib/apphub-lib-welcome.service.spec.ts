import { TestBed } from '@angular/core/testing';

import { ApphubLibWelcomeService } from './apphub-lib-welcome.service';

describe('ApphubLibWelcomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApphubLibWelcomeService = TestBed.get(ApphubLibWelcomeService);
    expect(service).toBeTruthy();
  });
});
