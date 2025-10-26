import { TestBed } from '@angular/core/testing';

import { CrearUsuarioServicio } from './crear-usuario-servicio';

describe('CrearUsuarioServicio', () => {
  let service: CrearUsuarioServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearUsuarioServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
