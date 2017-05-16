import {
  Component, OnInit, AfterViewInit, Input,
  Output, ChangeDetectionStrategy
} from '@angular/core';
import * as types from "../models/app-types";
import { ImageService } from '../service/image.service';

const template: string = `
<div class="container-fluid home">
    <div class="row header">
    </div>
    <div class="row myRow">
      <div class="col-md-6 col-xs-12 col-lg-6 left-section">
        <carousel [imagePaths]="hisImages"></carousel>
      </div>
      <div class="col-md-6 col-xs-12 col-lg-6 right-section">
        <carousel [imagePaths]="herImages"></carousel>
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

  }

  ngOnChanges(): void {
    this.LoadHisImages();
    this.LoadHerImages();
  }

  LoadHisImages(): void {
    // this.imageService.hisImages()
    //   .subscribe(item => {
    //     if (Array.isArray(item)) {
    //       item.forEach(image => {
    //         this.hisImages.push(`/images/he/${image}`)
    //       })
    //       console.log(this.hisImages);
    //     }
    //   });
    this.hisImages = [
      "/images/he/Cricketer.JPG",
      "/images/he/Foodie.JPG",
      "/images/he/Photographer.JPG",
      "/images/he/Traveler.JPG",
      "/images/he/Cook.JPG",      
    ]
  }

   LoadHerImages(): void {
    this.herImages = [
      "/images/she/Shopper.JPG",
      "/images/she/Dancer.JPG",
      "/images/she/Yogik.JPG",
      "/images/she/Singer.JPG",
      "/images/she/SelfieQueen.JPG",
    ]
  }

}

