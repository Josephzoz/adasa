import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalistPhotographyComponent } from './minimalist-photography.component';

describe('MinimalistPhotographyComponent', () => {
  let component: MinimalistPhotographyComponent;
  let fixture: ComponentFixture<MinimalistPhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinimalistPhotographyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MinimalistPhotographyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
