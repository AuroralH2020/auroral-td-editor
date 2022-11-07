import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPictogramComponent } from './item-pictogram.component';

describe('ItemPictogramComponent', () => {
  let component: ItemPictogramComponent;
  let fixture: ComponentFixture<ItemPictogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPictogramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPictogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
