import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DronePhotographyBasicsComponent } from './drone-photography-basics.component';

describe('DronePhotographyBasicsComponent', () => {
  let component: DronePhotographyBasicsComponent;
  let fixture: ComponentFixture<DronePhotographyBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DronePhotographyBasicsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DronePhotographyBasicsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
