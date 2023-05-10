import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenNodeProfileComponent } from './open-node-profile.component';

describe('OpenNodeProfileComponent', () => {
  let component: OpenNodeProfileComponent;
  let fixture: ComponentFixture<OpenNodeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenNodeProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenNodeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
