import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spin } from './spin';

describe('Spin', () => {
  let component: Spin;
  let fixture: ComponentFixture<Spin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
