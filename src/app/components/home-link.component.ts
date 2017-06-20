import {
  Component, OnInit, AfterViewInit, Input,
  Output, ChangeDetectionStrategy
} from '@angular/core';
import * as types from "../models/app-types";
import * as he from "../models/data/he";
import * as she from "../models/data/she";
import { ImageService } from '../service/image.service';

const template: string = `
  <div class="home-link">
    <a routerLink="/home" routerLinkActive="active">
      <i class="glyphicon glyphicon-home">
      </i>
    </a>  
  </div>
`
@Component({
  selector: 'home-link',
  template: template
})
export class HomeLinkComponent {

  constructor(private imageService: ImageService) {
  
  }


}

