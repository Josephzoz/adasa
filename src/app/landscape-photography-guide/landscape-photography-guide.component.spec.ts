import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapePhotographyGuideComponent } from './landscape-photography-guide.component';

describe('LandscapePhotographyGuideComponent', () => {
  let component: LandscapePhotographyGuideComponent;
  let fixture: ComponentFixture<LandscapePhotographyGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandscapePhotographyGuideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandscapePhotographyGuideComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
