import { TestBed } from '@angular/core/testing';

import { RoomHelperService } from './room-helper.service';

describe('RoomHelperService', () => {
  let service: RoomHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
