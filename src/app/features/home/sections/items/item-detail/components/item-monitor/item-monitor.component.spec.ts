import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInteractionComponent } from './item-monitor.component';

describe('ItemInteractionComponent', () => {
  let component: ItemInteractionComponent;
  let fixture: ComponentFixture<ItemInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemInteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
