import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongExposurePhotographyComponent } from './long-exposure-photography.component';

describe('LongExposurePhotographyComponent', () => {
  let component: LongExposurePhotographyComponent;
  let fixture: ComponentFixture<LongExposurePhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LongExposurePhotographyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LongExposurePhotographyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
