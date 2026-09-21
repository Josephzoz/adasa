import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstatePhotographyComponent } from './real-estate-photography.component';

describe('RealEstatePhotographyComponent', () => {
  let component: RealEstatePhotographyComponent;
  let fixture: ComponentFixture<RealEstatePhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstatePhotographyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RealEstatePhotographyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
