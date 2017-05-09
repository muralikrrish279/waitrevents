import { Component } from '@angular/core';
import * as types from "../models/app-types";
import { he } from "../models/data/he";
import { she } from "../models/data/she";
import { AppDataService } from '../service/app-data.service';

const template = `
<h1>
  {{appData?.title}}
</h1>
<timeline [data] = "timeLine">
</timeline>
`

@Component({
  selector: 'app-root',
  template: template
})
export class AppComponent {
  private type: types.eventType = types.eventType.he;

  constructor(private appData : AppDataService) {

  }

  get timeLine() {
    switch (this.type) {
      case types.eventType.he:
        return he;
      case types.eventType.she:
        return she;
      case types.eventType.meetup:
        return he;
      default:
        break;
    }
  }
}
