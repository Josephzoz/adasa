import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPhotographyBasicsComponent } from './food-photography-basics.component';

describe('FoodPhotographyBasicsComponent', () => {
  let component: FoodPhotographyBasicsComponent;
  let fixture: ComponentFixture<FoodPhotographyBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodPhotographyBasicsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodPhotographyBasicsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
