import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropDialogComponent } from './add-prop-dialog.component';

describe('AddPropDialogComponent', () => {
  let component: AddPropDialogComponent;
  let fixture: ComponentFixture<AddPropDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPropDialogComponent]
    });
    fixture = TestBed.createComponent(AddPropDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
