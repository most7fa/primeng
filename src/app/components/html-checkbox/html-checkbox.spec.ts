import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCheckbox } from './html-checkbox';

describe('HtmlCheckbox', () => {
  let component: HtmlCheckbox;
  let fixture: ComponentFixture<HtmlCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlCheckbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlCheckbox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
