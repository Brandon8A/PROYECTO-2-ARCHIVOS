import { TestBed } from '@angular/core/testing';

import { AutenticacionRegistroService } from './autenticacion-registro-service';

describe('AutenticacionRegistroService', () => {
  let service: AutenticacionRegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacionRegistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
