import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-twoway-binding-copy',
  templateUrl: './custom-twoway-binding-copy.component.html',
  styleUrls: ['./custom-twoway-binding-copy.component.scss']
})
export class CustomTwowayBindingCopyComponent {
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();
  toggle() {
    this.checkedChange.emit(!this.checked);
  }
}
