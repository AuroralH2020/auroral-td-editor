import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTdComponent } from './edit-td.component';

describe('EditTdComponent', () => {
  let component: EditTdComponent;
  let fixture: ComponentFixture<EditTdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTdComponent]
    });
    fixture = TestBed.createComponent(EditTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
