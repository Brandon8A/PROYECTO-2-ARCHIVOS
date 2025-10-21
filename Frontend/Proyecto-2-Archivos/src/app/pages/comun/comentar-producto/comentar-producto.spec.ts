import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarProducto } from './comentar-producto';

describe('ComentarProducto', () => {
  let component: ComentarProducto;
  let fixture: ComponentFixture<ComentarProducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentarProducto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarProducto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
