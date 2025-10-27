import { TestBed } from '@angular/core/testing';

import { ServicioModerador } from './servicio-moderador';

describe('ServicioModerador', () => {
  let service: ServicioModerador;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioModerador);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
