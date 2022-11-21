import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSubcribersBadgeComponent } from './item-subcribers-badge.component';

describe('ItemSubcribersBadgeComponent', () => {
  let component: ItemSubcribersBadgeComponent;
  let fixture: ComponentFixture<ItemSubcribersBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSubcribersBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSubcribersBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
