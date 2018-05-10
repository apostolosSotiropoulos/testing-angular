import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html'
})
export class GameControllerComponent {
  counter = 0;
  interval;
  @Output() newNumberEvent = new EventEmitter<{seconds: number}>();

  onStart() {
    this.interval = setInterval(() => {
      this.counter ++;
      this.newNumberEvent.emit({seconds: this.counter});
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
    this.counter = 0;
  }

}
