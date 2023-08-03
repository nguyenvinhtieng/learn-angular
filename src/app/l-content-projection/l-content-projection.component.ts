import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-l-content-projection',
  templateUrl: './l-content-projection.component.html',
  styleUrls: ['./l-content-projection.component.scss']
})
export class LContentProjectionComponent {
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();
  @Input() canSkip?: boolean;
  @Output() canSkipChange = new EventEmitter<boolean>();
  counter = 1;
}
