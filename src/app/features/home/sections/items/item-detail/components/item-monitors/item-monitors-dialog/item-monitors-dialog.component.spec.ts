import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMonitorsDialogComponent } from './item-monitors-dialog.component';

describe('ItemMonitorsDialogComponent', () => {
  let component: ItemMonitorsDialogComponent;
  let fixture: ComponentFixture<ItemMonitorsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMonitorsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemMonitorsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
