import { Component } from '@angular/core';
import * as types from "../models/app-types";
import { he } from "../models/data/he";
import { she } from "../models/data/she";
import { AppDataService } from '../service/app-data.service';

const template = `
<h1>
  {{appData?.config?.title}}
</h1>
<timeline [data] = "timeLineData">
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

  get timeLineData() {
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
