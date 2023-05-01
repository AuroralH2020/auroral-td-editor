import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeQueryComponent } from './node-query.component';

describe('NodeQueryComponent', () => {
  let component: NodeQueryComponent;
  let fixture: ComponentFixture<NodeQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
