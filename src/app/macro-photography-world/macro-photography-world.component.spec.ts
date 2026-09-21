import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroPhotographyWorldComponent } from './macro-photography-world.component';

describe('MacroPhotographyWorldComponent', () => {
  let component: MacroPhotographyWorldComponent;
  let fixture: ComponentFixture<MacroPhotographyWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacroPhotographyWorldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MacroPhotographyWorldComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
