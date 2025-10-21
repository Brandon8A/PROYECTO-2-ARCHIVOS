import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudProductos } from './solicitud-productos';

describe('SolicitudProductos', () => {
  let component: SolicitudProductos;
  let fixture: ComponentFixture<SolicitudProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudProductos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudProductos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
