import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPhotographyGuideComponent } from './wedding-photography-guide.component';

describe('WeddingPhotographyGuideComponent', () => {
  let component: WeddingPhotographyGuideComponent;
  let fixture: ComponentFixture<WeddingPhotographyGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingPhotographyGuideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeddingPhotographyGuideComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
