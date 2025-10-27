import { TestBed } from '@angular/core/testing';

import { ServicioComun } from './servicio-comun';

describe('ServicioComun', () => {
  let service: ServicioComun;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioComun);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
