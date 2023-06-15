import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeProfileComponent } from './node-profile.component';

describe('NodeProfileComponent', () => {
  let component: NodeProfileComponent;
  let fixture: ComponentFixture<NodeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
