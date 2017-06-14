import {
  Component, OnInit, AfterViewInit, Input,
  Output, ChangeDetectionStrategy
} from '@angular/core';
import * as types from "../models/app-types";
import * as he from "../models/data/he";
import * as she from "../models/data/she";
import { ImageService } from '../service/image.service';

const template: string = `
<div class="container-fluid home wrapper">
    <div class="dummyRow">
      <i class="glyphicon glyphicon-hand-down"></i>      
    </div>
    <img src="/images/savethedate.gif" class="savedate" />
    <img src="/images/wed.jpg" class="wed" />
    <a routerLink="/invite" routerLinkActive="active" title="Click me!!">
      <img src="/images/ready.png" class="ready" />         
    </a>
    <div class="row">
      <div class="col-md-6 col-xs-12 col-lg-6 left-section">
        <carousel [imagePaths]="hisImages" [id]="him"></carousel>
        <div class="right-button">
            <a routerLink="/story/he" routerLinkActive="active" class="btn btn-lg btn-success"> 
            His Story!!          
            </a>
        </div>
      </div>
      <div class="col-md-6 col-xs-12 col-lg-6 right-section">
        <carousel [imagePaths]="herImages" [id]="her"></carousel>
        <div class="right-button">
            <a routerLink="/story/she" routerLinkActive="active" class="btn btn-lg btn-success"> 
            Her Story!!          
            </a>
        </div>
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

