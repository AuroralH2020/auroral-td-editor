import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignItemsComponent } from './foreign-items.component';

describe('ForeignItemsComponent', () => {
  let component: ForeignItemsComponent;
  let fixture: ComponentFixture<ForeignItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeignItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
