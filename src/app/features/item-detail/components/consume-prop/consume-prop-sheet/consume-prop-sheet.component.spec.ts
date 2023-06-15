import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumePropSheetComponent } from './consume-prop-sheet.component';

describe('ConsumePropSheetComponent', () => {
  let component: ConsumePropSheetComponent;
  let fixture: ComponentFixture<ConsumePropSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumePropSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumePropSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
