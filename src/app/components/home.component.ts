import {
  Component, OnInit, AfterViewInit, Input,
  Output, ChangeDetectionStrategy
} from '@angular/core';
import * as types from "../models/app-types";
import * as he from "../models/data/he";
import * as she from "../models/data/she";
import { ImageService } from '../service/image.service';

const template: string = `
<div class="container-fluid home">
    <cover>
    </cover>
    <div class="row">
      <div class="col-md-6 col-xs-12 col-lg-6 left-section">
        <carousel [imagePaths]="hisImages" [id]="him"></carousel>
      </div>
      <div class="col-md-6 col-xs-12 col-lg-6 right-section">
        <carousel [imagePaths]="herImages" [id]="her"></carousel>
      </div>
    </div>
    <div class="row footer">
      <p>©2017 Muralikrishnan All Rights Reserved</p>
    </div>
</div>`

@Component({
  selector: 'home',
  template: template
})
export class HomeComponent {
  @Input() data: types.ITimeline;

  private hisImages: string[] = [];
  private herImages: string[];

  constructor(private imageService: ImageService) {
    this.hisImages = he.images;
    this.herImages = she.images;
  }


}

