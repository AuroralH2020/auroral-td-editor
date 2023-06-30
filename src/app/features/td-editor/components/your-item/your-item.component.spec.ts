import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourItemComponent } from './your-item.component';

describe('YourItemComponent', () => {
  let component: YourItemComponent;
  let fixture: ComponentFixture<YourItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourItemComponent]
    });
    fixture = TestBed.createComponent(YourItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
