import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbornBabyPhotographyComponent } from './newborn-baby-photography.component';

describe('NewbornBabyPhotographyComponent', () => {
  let component: NewbornBabyPhotographyComponent;
  let fixture: ComponentFixture<NewbornBabyPhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewbornBabyPhotographyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewbornBabyPhotographyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
