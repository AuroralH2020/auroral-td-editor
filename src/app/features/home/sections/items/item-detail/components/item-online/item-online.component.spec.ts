import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOnlineComponent } from './item-online.component';

describe('ItemDataAccessComponent', () => {
  let component: ItemOnlineComponent;
  let fixture: ComponentFixture<ItemOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemOnlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
