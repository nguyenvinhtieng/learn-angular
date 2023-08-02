import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-twoway-binding',
  templateUrl: './custom-twoway-binding.component.html',
  styleUrls: ['./custom-twoway-binding.component.scss']
})
export class CustomTwowayBindingComponent {
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();
}
