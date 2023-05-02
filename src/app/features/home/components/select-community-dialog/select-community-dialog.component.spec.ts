import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCommunityDialogComponent } from './select-community-dialog.component';

describe('SelectCommunityDialogComponent', () => {
  let component: SelectCommunityDialogComponent;
  let fixture: ComponentFixture<SelectCommunityDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCommunityDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCommunityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
