import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inplace } from './inplace';

describe('Inplace', () => {
  let component: Inplace;
  let fixture: ComponentFixture<Inplace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inplace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inplace);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
