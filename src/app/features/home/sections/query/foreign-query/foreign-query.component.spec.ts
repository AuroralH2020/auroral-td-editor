import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignQueryComponent } from './foreign-query.component';

describe('ForeignQueryComponent', () => {
  let component: ForeignQueryComponent;
  let fixture: ComponentFixture<ForeignQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeignQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
