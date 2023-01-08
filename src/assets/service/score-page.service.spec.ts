import { TestBed } from '@angular/core/testing';

import { ScorePageService } from './score-page.service';

describe('ScorePageService', () => {
  let service: ScorePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScorePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
