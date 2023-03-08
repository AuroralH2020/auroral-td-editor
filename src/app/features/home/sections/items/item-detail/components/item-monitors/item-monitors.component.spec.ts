import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMonitorsComponent } from './item-monitors.component';

describe('ItemMonitorsComponent', () => {
  let component: ItemMonitorsComponent;
  let fixture: ComponentFixture<ItemMonitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMonitorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemMonitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
