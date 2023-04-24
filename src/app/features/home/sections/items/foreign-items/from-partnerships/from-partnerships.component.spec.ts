import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromPartnershipsComponent } from './from-partnerships.component';

describe('FromPartnershipsComponent', () => {
  let component: FromPartnershipsComponent;
  let fixture: ComponentFixture<FromPartnershipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromPartnershipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromPartnershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
