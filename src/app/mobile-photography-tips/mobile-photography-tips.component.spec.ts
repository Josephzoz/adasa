import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePhotographyTipsComponent } from './mobile-photography-tips.component';

describe('MobilePhotographyTipsComponent', () => {
  let component: MobilePhotographyTipsComponent;
  let fixture: ComponentFixture<MobilePhotographyTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilePhotographyTipsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MobilePhotographyTipsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
