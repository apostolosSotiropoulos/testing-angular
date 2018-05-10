import {Component} from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './inputFollower.component.html'
})
export class InputFollowerComponent {
  myText = '';

  onResetMyText() {
    this.myText = '';
  }
}
