import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cascadeselect } from './cascadeselect';

describe('Cascadeselect', () => {
  let component: Cascadeselect;
  let fixture: ComponentFixture<Cascadeselect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cascadeselect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cascadeselect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
