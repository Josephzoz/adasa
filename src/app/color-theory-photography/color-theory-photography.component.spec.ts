import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTheoryPhotographyComponent } from './color-theory-photography.component';

describe('ColorTheoryPhotographyComponent', () => {
  let component: ColorTheoryPhotographyComponent;
  let fixture: ComponentFixture<ColorTheoryPhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorTheoryPhotographyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorTheoryPhotographyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
