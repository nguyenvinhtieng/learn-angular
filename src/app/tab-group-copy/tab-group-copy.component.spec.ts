import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupCopyComponent } from './tab-group-copy.component';

describe('TabGroupCopyComponent', () => {
  let component: TabGroupCopyComponent;
  let fixture: ComponentFixture<TabGroupCopyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupCopyComponent]
    });
    fixture = TestBed.createComponent(TabGroupCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
