import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibleCheckbox } from './accessible-checkbox';

describe('AccessibleCheckbox', () => {
  let component: AccessibleCheckbox;
  let fixture: ComponentFixture<AccessibleCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibleCheckbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessibleCheckbox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
