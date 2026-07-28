import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticHtml } from './semantic-html';

describe('SemanticHtml', () => {
  let component: SemanticHtml;
  let fixture: ComponentFixture<SemanticHtml>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemanticHtml]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemanticHtml);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
