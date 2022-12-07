import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataServiceCreateComponent } from './data-service-create.component';

describe('DataServiceCreateComponent', () => {
  let component: DataServiceCreateComponent;
  let fixture: ComponentFixture<DataServiceCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataServiceCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataServiceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
