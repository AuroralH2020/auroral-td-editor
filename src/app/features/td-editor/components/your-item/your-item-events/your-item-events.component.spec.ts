import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourItemEventsComponent } from './your-item-events.component';

describe('YourItemEventsComponent', () => {
  let component: YourItemEventsComponent;
  let fixture: ComponentFixture<YourItemEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourItemEventsComponent]
    });
    fixture = TestBed.createComponent(YourItemEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
