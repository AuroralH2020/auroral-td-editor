import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeItemsComponent } from './node-items.component';

describe('NodeItemsComponent', () => {
  let component: NodeItemsComponent;
  let fixture: ComponentFixture<NodeItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
