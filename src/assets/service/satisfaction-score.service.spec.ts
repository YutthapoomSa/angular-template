import { TestBed } from '@angular/core/testing';

import { SatisfactionScoreService } from './satisfaction-score.service';

describe('SatisfactionScoreService', () => {
  let service: SatisfactionScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SatisfactionScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
