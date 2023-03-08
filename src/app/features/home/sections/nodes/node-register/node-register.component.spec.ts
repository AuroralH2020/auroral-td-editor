import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeRegisterComponent } from './node-register.component';

describe('NodeRegisterComponent', () => {
  let component: NodeRegisterComponent;
  let fixture: ComponentFixture<NodeRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
