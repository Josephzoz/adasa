import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsActionPhotographyComponent } from './sports-action-photography.component';

describe('SportsActionPhotographyComponent', () => {
  let component: SportsActionPhotographyComponent;
  let fixture: ComponentFixture<SportsActionPhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsActionPhotographyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SportsActionPhotographyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
