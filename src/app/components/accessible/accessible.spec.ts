import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accessible } from './accessible';

describe('Accessible', () => {
  let component: Accessible;
  let fixture: ComponentFixture<Accessible>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accessible]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accessible);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
