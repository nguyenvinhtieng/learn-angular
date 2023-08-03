import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {
  currentDate = new Date();
  address = {
    street: '123 Main St',
    city: 'Houston',
    state: 'TX',
    zip: '77002'
  }
}
