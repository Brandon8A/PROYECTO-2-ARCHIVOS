import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderUserComun } from './slider-user-comun';

describe('SliderUserComun', () => {
  let component: SliderUserComun;
  let fixture: ComponentFixture<SliderUserComun>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderUserComun]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderUserComun);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
