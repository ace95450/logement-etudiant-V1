import { TestBed } from '@angular/core/testing';

import { ImmoService } from './immo.service';

describe('ImmoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImmoService = TestBed.get(ImmoService);
    expect(service).toBeTruthy();
  });
});
