import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReRunDiscoveryComponent } from './re-run-discovery.component';

describe('ReRunDiscoveryComponent', () => {
  let component: ReRunDiscoveryComponent;
  let fixture: ComponentFixture<ReRunDiscoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReRunDiscoveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReRunDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
