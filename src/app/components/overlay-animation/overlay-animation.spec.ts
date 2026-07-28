import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayAnimation } from './overlay-animation';

describe('OverlayAnimation', () => {
  let component: OverlayAnimation;
  let fixture: ComponentFixture<OverlayAnimation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayAnimation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayAnimation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
