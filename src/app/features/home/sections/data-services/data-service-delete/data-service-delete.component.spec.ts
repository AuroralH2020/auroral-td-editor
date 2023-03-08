import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataServiceDeleteComponent } from './data-service-delete.component';

describe('DataServiceDeleteComponent', () => {
  let component: DataServiceDeleteComponent;
  let fixture: ComponentFixture<DataServiceDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataServiceDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataServiceDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
