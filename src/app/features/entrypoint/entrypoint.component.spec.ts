import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrypointComponent } from './entrypoint.component';

describe('EntrypointComponent', () => {
  let component: EntrypointComponent;
  let fixture: ComponentFixture<EntrypointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntrypointComponent]
    });
    fixture = TestBed.createComponent(EntrypointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
