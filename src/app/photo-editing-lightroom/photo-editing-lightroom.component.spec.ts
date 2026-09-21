import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoEditingLightroomComponent } from './photo-editing-lightroom.component';

describe('PhotoEditingLightroomComponent', () => {
  let component: PhotoEditingLightroomComponent;
  let fixture: ComponentFixture<PhotoEditingLightroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoEditingLightroomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoEditingLightroomComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
