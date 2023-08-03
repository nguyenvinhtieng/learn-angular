import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent {
  tabPanelList: TabPanelComponent[] = [];
  @Input() activeIndex = 0;
  @Output() activeIndexChange = new EventEmitter<number>();

  addTab(tabPanel: TabPanelComponent) {
    this.tabPanelList.push(tabPanel);
  }

  removeTab(tabPanel: TabPanelComponent) {
    let found = -1;
    this.tabPanelList = this.tabPanelList.filter((item, index) => {
      if (item === tabPanel) {
        found = index;
        return false;
      }
      return true;
    })

    if(this.activeIndex === found) {
      this.activeIndex = 0;
      this.activeIndexChange.emit(found === this.tabPanelList.length ? found - 1 : found);
    }
  }
}
