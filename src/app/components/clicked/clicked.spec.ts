import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clicked } from './clicked';

describe('Clicked', () => {
  let component: Clicked;
  let fixture: ComponentFixture<Clicked>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Clicked]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clicked);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
