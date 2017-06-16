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
    </div>
    <img src="/images/savethedate.gif" class="savedate" />
    <img src="/images/wed.jpg" class="wed" />
    <a routerLink="/invite" routerLinkActive="active" title="Click me!!">
      <img src="/images/ready.png" class="ready" />         
    </a>
    <div class="hometab">
        <button class="hometab-links" [ngClass] = "{'active' : isInvitation}" (click)="toggleFlag('Invitation')">
          <a routerLink="/invite" routerLinkActive="active"> 
              <i class="glyphicon glyphicon-send"></i>Invitation      
          </a>
        </button>
        <button class="hometab-links" [ngClass] = "{'active' : isHim}" (click)="toggleFlag('Him')">
          <a routerLink="/story/he" routerLinkActive="active"> 
              <i class="glyphicon glyphicon-king"></i>His Story!!          
          </a>
        </button>
        <button class="hometab-links" [ngClass] = "{'active' : isHer}" (click)="toggleFlag('Her')">
          <a routerLink="/story/she" routerLinkActive="active"> 
              <i class="glyphicon glyphicon-queen"></i>Her Story!!          
          </a>
        </button>
    </div>
    <div class="row">
      <div class="col-md-6 col-xs-12 col-lg-6 left-section">
        <carousel [imagePaths]="hisImages"></carousel>
      </div>
      <div class="col-md-6 col-xs-12 col-lg-6 right-section">
        <carousel [imagePaths]="herImages"></carousel>
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

  public isInvitation: boolean = false;
  public isHim: boolean = false;
  public isHer: boolean = false;
  public hisImages: string[] = [];
  public herImages: string[];

  constructor(private imageService: ImageService) {
    this.hisImages = he.images;
    this.herImages = she.images;
  }


  toggleFlag(action: string): void {
    this.isInvitation = false;
    this.isHer = false;
    this.isHim = false;
    switch (action) {
      case "Invitation":
        this.isInvitation = true;
        break;
      case "Him":
        this.isHim = true;
        break;
      case "Her":
        this.isHer = true;
        break;
      default:
        break;
    }
  }


}

