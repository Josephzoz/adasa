import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawVsJpegExplainedComponent } from './raw-vs-jpeg-explained.component';

describe('RawVsJpegExplainedComponent', () => {
  let component: RawVsJpegExplainedComponent;
  let fixture: ComponentFixture<RawVsJpegExplainedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RawVsJpegExplainedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RawVsJpegExplainedComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
