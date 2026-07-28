import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIcons } from './button-icons';

describe('ButtonIcons', () => {
  let component: ButtonIcons;
  let fixture: ComponentFixture<ButtonIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIcons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIcons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
