import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictogramComponent } from './pictogram.component';

describe('PictogramComponent', () => {
  let component: PictogramComponent;
  let fixture: ComponentFixture<PictogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictogramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
