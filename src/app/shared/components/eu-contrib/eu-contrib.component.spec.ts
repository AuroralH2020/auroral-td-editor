import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuContribComponent } from './eu-contrib.component';

describe('EuContribComponent', () => {
  let component: EuContribComponent;
  let fixture: ComponentFixture<EuContribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuContribComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EuContribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
