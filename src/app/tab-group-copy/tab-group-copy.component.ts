import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'app-tab-group-copy',
  templateUrl: './tab-group-copy.component.html',
  styleUrls: ['./tab-group-copy.component.scss'],
  providers: [
    {
      provide: TabGroupComponent,
      useExisting: TabGroupCopyComponent
    }
  ]
})
export class TabGroupCopyComponent extends TabGroupComponent {}
