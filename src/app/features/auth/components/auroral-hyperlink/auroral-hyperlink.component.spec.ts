import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuroralHyperlinkComponent } from './auroral-hyperlink.component';

describe('AuroralHyperlinkComponent', () => {
  let component: AuroralHyperlinkComponent;
  let fixture: ComponentFixture<AuroralHyperlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuroralHyperlinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuroralHyperlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
