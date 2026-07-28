import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputToUsername } from './input-to-username';

describe('InputToUsername', () => {
  let component: InputToUsername;
  let fixture: ComponentFixture<InputToUsername>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputToUsername]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputToUsername);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
