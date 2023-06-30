import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourItemTypeComponent } from './your-item-type.component';

describe('YourItemTypeComponent', () => {
  let component: YourItemTypeComponent;
  let fixture: ComponentFixture<YourItemTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourItemTypeComponent]
    });
    fixture = TestBed.createComponent(YourItemTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
