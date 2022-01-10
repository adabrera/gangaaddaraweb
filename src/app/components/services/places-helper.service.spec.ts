import { TestBed } from '@angular/core/testing';

import { PlacesHelperService } from './places-helper.service';

describe('PlacesHelperService', () => {
  let service: PlacesHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacesHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
