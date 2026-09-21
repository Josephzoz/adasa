import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraSettingsBasicsComponent } from './camera-settings-basics.component';

describe('CameraSettingsBasicsComponent', () => {
  let component: CameraSettingsBasicsComponent;
  let fixture: ComponentFixture<CameraSettingsBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CameraSettingsBasicsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CameraSettingsBasicsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
