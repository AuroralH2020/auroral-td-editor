import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ItemSubscribersComponent } from './item-subscribers.component'

describe('ItemSubscribersComponent', () => {
  let component: ItemSubscribersComponent
  let fixture: ComponentFixture<ItemSubscribersComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemSubscribersComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ItemSubscribersComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
