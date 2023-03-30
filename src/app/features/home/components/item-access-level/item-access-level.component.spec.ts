import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAccessLevelComponent } from './item-access-level.component';

describe('ItemAccessLevelComponent', () => {
  let component: ItemAccessLevelComponent;
  let fixture: ComponentFixture<ItemAccessLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAccessLevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemAccessLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
