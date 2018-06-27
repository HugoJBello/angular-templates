import { TestBed, inject } from '@angular/core/testing';

import { CswInvokerService } from './csw-invoker.service';

describe('CswInvokerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CswInvokerService]
    });
  });

  it('should be created', inject([CswInvokerService], (service: CswInvokerService) => {
    expect(service).toBeTruthy();
  }));
});
