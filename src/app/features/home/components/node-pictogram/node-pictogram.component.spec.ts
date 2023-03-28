import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodePictogramComponent } from './node-pictogram.component';

describe('NodePictogramComponent', () => {
  let component: NodePictogramComponent;
  let fixture: ComponentFixture<NodePictogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodePictogramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodePictogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
