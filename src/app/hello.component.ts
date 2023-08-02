import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: '<h1>Hello: {{ name }}</h1>',
})
export class HelloComponent {
  @Input() name: string = '';

  ngOnInit() {
    console.log('App component initialized')
  }

  ngOnDestroy() {
    console.log('App component destroyed')
  }
}
