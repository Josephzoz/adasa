import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPhotographyEssentialsComponent } from './product-photography-essentials.component';

describe('ProductPhotographyEssentialsComponent', () => {
  let component: ProductPhotographyEssentialsComponent;
  let fixture: ComponentFixture<ProductPhotographyEssentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPhotographyEssentialsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPhotographyEssentialsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
