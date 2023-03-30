import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeItemDetailComponent } from './node-item-detail.component';

describe('NodeItemDetailComponent', () => {
  let component: NodeItemDetailComponent;
  let fixture: ComponentFixture<NodeItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeItemDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
