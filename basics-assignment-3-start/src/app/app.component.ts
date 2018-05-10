import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // detailsPushedCounter = 0;
  detailsPushedArray = [];

  detailsPushed(event: Event) {
    // this.detailsPushedCounter += 1;
    this.detailsPushedArray.push(event.timeStamp);
  }

  timeFromTimestamp(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const seconds = '0' + date.getSeconds();
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  }

  getColor(veth) {
    return veth > this.detailsPushedArray[3] ? 'blue' : 'white';
  }
}
