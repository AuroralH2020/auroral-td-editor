import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourItemInfoComponent } from './your-item-info.component';

describe('YourItemInfoComponent', () => {
  let component: YourItemInfoComponent;
  let fixture: ComponentFixture<YourItemInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourItemInfoComponent]
    });
    fixture = TestBed.createComponent(YourItemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
