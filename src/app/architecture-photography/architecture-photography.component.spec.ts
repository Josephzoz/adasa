import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitecturePhotographyComponent } from './architecture-photography.component';

describe('ArchitecturePhotographyComponent', () => {
  let component: ArchitecturePhotographyComponent;
  let fixture: ComponentFixture<ArchitecturePhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitecturePhotographyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitecturePhotographyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
