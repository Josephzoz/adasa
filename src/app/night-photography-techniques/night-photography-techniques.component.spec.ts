import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightPhotographyTechniquesComponent } from './night-photography-techniques.component';

describe('NightPhotographyTechniquesComponent', () => {
  let component: NightPhotographyTechniquesComponent;
  let fixture: ComponentFixture<NightPhotographyTechniquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NightPhotographyTechniquesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NightPhotographyTechniquesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
