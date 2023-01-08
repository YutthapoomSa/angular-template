import { TestBed } from '@angular/core/testing';

import { ProblemPageService } from './problem-page.service';

describe('ProblemPageService', () => {
  let service: ProblemPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
