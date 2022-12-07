import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeUnregisterComponent } from './node-unregister.component';

describe('NodeUnregisterComponent', () => {
  let component: NodeUnregisterComponent;
  let fixture: ComponentFixture<NodeUnregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeUnregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeUnregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
