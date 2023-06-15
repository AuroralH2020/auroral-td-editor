import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrgItemsComponent } from './my-org-items.component';

describe('MyOrgItemsComponent', () => {
  let component: MyOrgItemsComponent;
  let fixture: ComponentFixture<MyOrgItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOrgItemsComponent]
    });
    fixture = TestBed.createComponent(MyOrgItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
