import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataServiceDetailComponent } from './data-service-detail.component';

describe('DataServiceDetailComponent', () => {
  let component: DataServiceDetailComponent;
  let fixture: ComponentFixture<DataServiceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataServiceDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
