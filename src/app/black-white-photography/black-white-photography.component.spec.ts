import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackWhitePhotographyComponent } from './black-white-photography.component';

describe('BlackWhitePhotographyComponent', () => {
  let component: BlackWhitePhotographyComponent;
  let fixture: ComponentFixture<BlackWhitePhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlackWhitePhotographyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlackWhitePhotographyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
