import { TestBed } from '@angular/core/testing';

import { CodWarzoneCheatersForecastJsonService } from './cod-warzone-cheaters-forecast-json.service';

describe('CodWarzoneCheatersForecastJsonService', () => {
  let service: CodWarzoneCheatersForecastJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodWarzoneCheatersForecastJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
