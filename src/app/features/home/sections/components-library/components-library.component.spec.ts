import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsLibraryComponent } from './components-library.component';

describe('ComponentsLibraryComponent', () => {
  let component: ComponentsLibraryComponent;
  let fixture: ComponentFixture<ComponentsLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
