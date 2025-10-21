import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioUserComun } from './inicio-user-comun';

describe('InicioUserComun', () => {
  let component: InicioUserComun;
  let fixture: ComponentFixture<InicioUserComun>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioUserComun]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioUserComun);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
