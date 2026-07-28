import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Programmatic } from './programmatic';

describe('Programmatic', () => {
  let component: Programmatic;
  let fixture: ComponentFixture<Programmatic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Programmatic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Programmatic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
