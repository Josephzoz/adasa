import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashPhotographyBasicsComponent } from './flash-photography-basics.component';

describe('FlashPhotographyBasicsComponent', () => {
  let component: FlashPhotographyBasicsComponent;
  let fixture: ComponentFixture<FlashPhotographyBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashPhotographyBasicsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlashPhotographyBasicsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
