import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAdmins } from './inicio-admins';

describe('InicioAdmins', () => {
  let component: InicioAdmins;
  let fixture: ComponentFixture<InicioAdmins>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioAdmins]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioAdmins);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
