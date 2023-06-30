import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourItemPropsComponent } from './your-item-props.component';

describe('YourItemPropsComponent', () => {
  let component: YourItemPropsComponent;
  let fixture: ComponentFixture<YourItemPropsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourItemPropsComponent]
    });
    fixture = TestBed.createComponent(YourItemPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
