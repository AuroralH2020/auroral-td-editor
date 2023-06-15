import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumePropComponent } from './consume-prop.component';

describe('ConsumePropComponent', () => {
  let component: ConsumePropComponent;
  let fixture: ComponentFixture<ConsumePropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumePropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumePropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
