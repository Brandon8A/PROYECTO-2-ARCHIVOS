import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderModerador } from './slider-moderador';

describe('SliderModerador', () => {
  let component: SliderModerador;
  let fixture: ComponentFixture<SliderModerador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderModerador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderModerador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
