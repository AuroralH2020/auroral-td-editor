import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSubscriptionsComponent } from './item-subscriptions.component';

describe('ItemSubscriptionListComponent', () => {
  let component: ItemSubscriptionsComponent;
  let fixture: ComponentFixture<ItemSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSubscriptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
