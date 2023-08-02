import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTwowayBindingCopyComponent } from './custom-twoway-binding-copy.component';

describe('CustomTwowayBindingCopyComponent', () => {
  let component: CustomTwowayBindingCopyComponent;
  let fixture: ComponentFixture<CustomTwowayBindingCopyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomTwowayBindingCopyComponent]
    });
    fixture = TestBed.createComponent(CustomTwowayBindingCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
