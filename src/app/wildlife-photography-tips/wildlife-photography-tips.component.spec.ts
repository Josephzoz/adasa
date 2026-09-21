import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildlifePhotographyTipsComponent } from './wildlife-photography-tips.component';

describe('WildlifePhotographyTipsComponent', () => {
  let component: WildlifePhotographyTipsComponent;
  let fixture: ComponentFixture<WildlifePhotographyTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WildlifePhotographyTipsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WildlifePhotographyTipsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
