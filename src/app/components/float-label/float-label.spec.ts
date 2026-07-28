import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatLabel } from './float-label';

describe('FloatLabel', () => {
  let component: FloatLabel;
  let fixture: ComponentFixture<FloatLabel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatLabel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatLabel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
