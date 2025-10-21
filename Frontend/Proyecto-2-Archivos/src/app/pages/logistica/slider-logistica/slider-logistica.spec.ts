import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderLogistica } from './slider-logistica';

describe('SliderLogistica', () => {
  let component: SliderLogistica;
  let fixture: ComponentFixture<SliderLogistica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderLogistica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderLogistica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
