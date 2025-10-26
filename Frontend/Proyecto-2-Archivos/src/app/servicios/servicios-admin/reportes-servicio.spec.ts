import { TestBed } from '@angular/core/testing';

import { ReportesServicio } from './reportes-servicio';

describe('ReportesServicio', () => {
  let service: ReportesServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportesServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
