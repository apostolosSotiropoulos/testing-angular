import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seconds = [];

  getNumbers(time: {seconds: number}) {
    this.seconds.push(time.seconds);
  }
}
