import { Component } from '@angular/core';
import * as types from "../models/app-types";
import { he } from "../models/data/he";
import { she } from "../models/data/she";
import { AppDataService } from '../service/app-data.service';
import { ImageService } from '../service/image.service';

const template = `
<router-outlet></router-outlet>
`

@Component({
  selector: 'app-root',
  template: template
})
export class AppComponent {
  private type: types.eventType = types.eventType.he;

  constructor(private appData: AppDataService, private imageService: ImageService) {

  }

  ngOnInit(): void {

  }

 

}
