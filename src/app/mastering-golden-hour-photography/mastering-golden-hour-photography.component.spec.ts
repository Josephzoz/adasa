import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteringGoldenHourPhotographyComponent } from './mastering-golden-hour-photography.component';

describe('MasteringGoldenHourPhotographyComponent', () => {
  let component: MasteringGoldenHourPhotographyComponent;
  let fixture: ComponentFixture<MasteringGoldenHourPhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasteringGoldenHourPhotographyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MasteringGoldenHourPhotographyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
