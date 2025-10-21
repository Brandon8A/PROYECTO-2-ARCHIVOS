import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspensionCuenta } from './suspension-cuenta';

describe('SuspensionCuenta', () => {
  let component: SuspensionCuenta;
  let fixture: ComponentFixture<SuspensionCuenta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuspensionCuenta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuspensionCuenta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
