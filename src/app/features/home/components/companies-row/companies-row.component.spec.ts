import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesRowComponent } from './companies-row.component';

describe('CompaniesRowComponent', () => {
  let component: CompaniesRowComponent;
  let fixture: ComponentFixture<CompaniesRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompaniesRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
