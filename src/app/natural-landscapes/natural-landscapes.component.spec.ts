import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalLandscapesComponent } from './natural-landscapes.component';

describe('NaturalLandscapesComponent', () => {
  let component: NaturalLandscapesComponent;
  let fixture: ComponentFixture<NaturalLandscapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaturalLandscapesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NaturalLandscapesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
