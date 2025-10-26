import { TestBed } from '@angular/core/testing';

import { ServicioLogistica } from './servicio-logistica';

describe('ServicioLogistica', () => {
  let service: ServicioLogistica;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioLogistica);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
