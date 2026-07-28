import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomIconImage } from './custom-icon-image';

describe('CustomIconImage', () => {
  let component: CustomIconImage;
  let fixture: ComponentFixture<CustomIconImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomIconImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomIconImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
