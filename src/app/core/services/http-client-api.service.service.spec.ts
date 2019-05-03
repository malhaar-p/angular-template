import { TestBed, inject } from '@angular/core/testing';

import { HttpClientApi.ServiceService } from './http-client-api.service.service';

describe('HttpClientApi.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientApi.ServiceService]
    });
  });

  it('should be created', inject([HttpClientApi.ServiceService], (service: HttpClientApi.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
