import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  // @Input() progress = 50
  @Input() set progress(value: number) {
    this._progress = value
  }
  _progress = 50
  get progress() {
    return this._progress
  }
  @Input() backgroundColor = '#ccc'
  @Input() progressColor = '#f00'
  constructor() {
    // console.log({
    //   progress: this.progress,
    //   backgroundColor: this.backgroundColor,
    //   progressColor: this.progressColor
    // })
  }
  ngOnInit() {
    console.log("Component initialized!")
    console.log({
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Component changes!")
    console.log(changes)
    console.log("Changes: ", {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor
    })
  }

  // ngDestroy() {
  //   console.log("Component destroyed!")
  // }
}
