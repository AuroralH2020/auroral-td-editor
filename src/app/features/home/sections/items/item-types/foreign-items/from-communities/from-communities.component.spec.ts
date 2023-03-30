import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromCommunitiesComponent } from './from-communities.component';

describe('FromCommunitiesComponent', () => {
  let component: FromCommunitiesComponent;
  let fixture: ComponentFixture<FromCommunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromCommunitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
