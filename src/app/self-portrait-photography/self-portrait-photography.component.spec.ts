import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfPortraitPhotographyComponent } from './self-portrait-photography.component';

describe('SelfPortraitPhotographyComponent', () => {
  let component: SelfPortraitPhotographyComponent;
  let fixture: ComponentFixture<SelfPortraitPhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfPortraitPhotographyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelfPortraitPhotographyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
