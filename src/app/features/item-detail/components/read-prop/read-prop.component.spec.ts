import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPropComponent } from './read-prop.component';

describe('ReadPropComponent', () => {
  let component: ReadPropComponent;
  let fixture: ComponentFixture<ReadPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadPropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
