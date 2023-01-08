import { TestBed } from '@angular/core/testing';

import { SubTitleService } from './sub-title.service';

describe('SubTitleService', () => {
  let service: SubTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
