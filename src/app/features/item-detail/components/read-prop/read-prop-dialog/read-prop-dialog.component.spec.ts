import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPropDialogComponent } from './read-prop-dialog.component';

describe('ReadPropDialogComponent', () => {
  let component: ReadPropDialogComponent;
  let fixture: ComponentFixture<ReadPropDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadPropDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadPropDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
