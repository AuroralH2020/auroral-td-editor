import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrgItemComponent } from './my-org-item.component';

describe('MyOrgItemComponent', () => {
  let component: MyOrgItemComponent;
  let fixture: ComponentFixture<MyOrgItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOrgItemComponent]
    });
    fixture = TestBed.createComponent(MyOrgItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
