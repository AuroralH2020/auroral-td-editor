import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipItemComponent } from './partnership-item.component';

describe('PartnershipItemComponent', () => {
  let component: PartnershipItemComponent;
  let fixture: ComponentFixture<PartnershipItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnershipItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnershipItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
