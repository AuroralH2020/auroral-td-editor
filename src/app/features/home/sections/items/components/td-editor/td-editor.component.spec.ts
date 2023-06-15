import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdEditorComponent } from './td-editor.component';

describe('TdEditorComponent', () => {
  let component: TdEditorComponent;
  let fixture: ComponentFixture<TdEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TdEditorComponent]
    });
    fixture = TestBed.createComponent(TdEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
