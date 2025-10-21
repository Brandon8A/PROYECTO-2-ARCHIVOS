import { TestBed } from '@angular/core/testing';

import { RegistroUsuarioComun } from './registro-usuario-comun';

describe('RegistroUsuarioComun', () => {
  let service: RegistroUsuarioComun;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroUsuarioComun);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
