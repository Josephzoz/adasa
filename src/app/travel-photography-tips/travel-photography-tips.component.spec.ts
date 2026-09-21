import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPhotographyTipsComponent } from './travel-photography-tips.component';

describe('TravelPhotographyTipsComponent', () => {
  let component: TravelPhotographyTipsComponent;
  let fixture: ComponentFixture<TravelPhotographyTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelPhotographyTipsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TravelPhotographyTipsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
