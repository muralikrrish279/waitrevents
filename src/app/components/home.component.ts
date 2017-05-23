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
    <div class="row header">
      <flip-tile></flip-tile>
    </div>
    <div class="row myRow">
      <div class="col-md-6 col-xs-12 col-lg-6 left-section">
        <carousel [imagePaths]="hisImages"></carousel>
        <a class ="btn btn-warning btn-lg left-button"routerLink="/story/he" routerLinkActive="active">Get to know him!!</a>
      </div>
      <div class="col-md-6 col-xs-12 col-lg-6 right-section">
        <carousel [imagePaths]="herImages"></carousel>
        <a class ="btn btn-info btn-lg right-button"routerLink="/story/she" routerLinkActive="active">Get to know her!!</a>        
      </div>
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

