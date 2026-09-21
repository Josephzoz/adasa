import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetPhotographyGuideComponent } from './street-photography-guide.component';

describe('StreetPhotographyGuideComponent', () => {
  let component: StreetPhotographyGuideComponent;
  let fixture: ComponentFixture<StreetPhotographyGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreetPhotographyGuideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StreetPhotographyGuideComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
