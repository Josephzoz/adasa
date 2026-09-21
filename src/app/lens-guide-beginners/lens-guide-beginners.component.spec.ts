import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LensGuideBeginnersComponent } from './lens-guide-beginners.component';

describe('LensGuideBeginnersComponent', () => {
  let component: LensGuideBeginnersComponent;
  let fixture: ComponentFixture<LensGuideBeginnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LensGuideBeginnersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LensGuideBeginnersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
