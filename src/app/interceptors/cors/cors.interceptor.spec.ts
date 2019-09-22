import { TestBed, inject } from '@angular/core/testing';

import { CredentialInterceptor } from './cors.interceptor';

describe('CredentialInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CredentialInterceptor]
    });
  });

  it('should be created', inject([CredentialInterceptor], (service: CredentialInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
