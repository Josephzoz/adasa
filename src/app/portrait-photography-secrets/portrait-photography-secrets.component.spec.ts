import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitPhotographySecretsComponent } from './portrait-photography-secrets.component';

describe('PortraitPhotographySecretsComponent', () => {
  let component: PortraitPhotographySecretsComponent;
  let fixture: ComponentFixture<PortraitPhotographySecretsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortraitPhotographySecretsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortraitPhotographySecretsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
