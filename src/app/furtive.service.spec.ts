import { TestBed } from '@angular/core/testing';

import { FurtiveService } from './furtive.service';

describe('FurtiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FurtiveService = TestBed.get(FurtiveService);
    expect(service).toBeTruthy();
  });
});
