import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemManageSubscriptionsComponent } from './item-manage-subscriptions.component';

describe('ItemManageSubscriptionsComponent', () => {
  let component: ItemManageSubscriptionsComponent;
  let fixture: ComponentFixture<ItemManageSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemManageSubscriptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemManageSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
