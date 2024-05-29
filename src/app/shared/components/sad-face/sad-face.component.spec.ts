import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadFaceComponent } from './sad-face.component';

describe('SadFaceComponent', () => {
  let component: SadFaceComponent;
  let fixture: ComponentFixture<SadFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SadFaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SadFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
