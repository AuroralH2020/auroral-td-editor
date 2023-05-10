import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeProfilePictogramComponent } from './node-profile-pictogram.component';

describe('NodeProfilePictogramComponent', () => {
  let component: NodeProfilePictogramComponent;
  let fixture: ComponentFixture<NodeProfilePictogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeProfilePictogramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeProfilePictogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
