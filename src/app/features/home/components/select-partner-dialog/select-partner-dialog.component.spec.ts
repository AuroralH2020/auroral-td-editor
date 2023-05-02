import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPartnerDialogComponent } from './select-partner-dialog.component';

describe('SelectPartnerDialogComponent', () => {
  let component: SelectPartnerDialogComponent;
  let fixture: ComponentFixture<SelectPartnerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPartnerDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPartnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
