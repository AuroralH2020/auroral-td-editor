import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipQueryComponent } from './partnership-query.component';

describe('PartnershipQueryComponent', () => {
  let component: PartnershipQueryComponent;
  let fixture: ComponentFixture<PartnershipQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnershipQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnershipQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
