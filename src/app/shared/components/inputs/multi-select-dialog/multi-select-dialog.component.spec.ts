import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectDialogComponent } from './multi-select-dialog.component';

describe('MultiSelectDialogComponent', () => {
  let component: MultiSelectDialogComponent;
  let fixture: ComponentFixture<MultiSelectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSelectDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
