import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildComponent } from './wild.component';

describe('WildComponent', () => {
  let component: WildComponent;
  let fixture: ComponentFixture<WildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WildComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
