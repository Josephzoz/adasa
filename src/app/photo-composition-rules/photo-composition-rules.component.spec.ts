import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCompositionRulesComponent } from './photo-composition-rules.component';

describe('PhotoCompositionRulesComponent', () => {
  let component: PhotoCompositionRulesComponent;
  let fixture: ComponentFixture<PhotoCompositionRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoCompositionRulesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoCompositionRulesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
