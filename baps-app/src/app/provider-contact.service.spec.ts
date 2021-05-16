import { TestBed } from '@angular/core/testing';

import { ProviderContactService } from './provider-contact.service';

describe('ProviderContactService', () => {
  let service: ProviderContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProviderContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
