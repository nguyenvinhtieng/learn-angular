import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LContentProjectionComponent } from './l-content-projection.component';

describe('LContentProjectionComponent', () => {
  let component: LContentProjectionComponent;
  let fixture: ComponentFixture<LContentProjectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LContentProjectionComponent]
    });
    fixture = TestBed.createComponent(LContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
