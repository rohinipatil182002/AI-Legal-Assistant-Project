import { TestBed } from '@angular/core/testing';

import { LegalAIService } from './legal-ai.service';

describe('LegalAIService', () => {
  let service: LegalAIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalAIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
