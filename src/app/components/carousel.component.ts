import {
    Component, OnInit, AfterViewInit, Input,
    Output, ChangeDetectionStrategy
} from '@angular/core';
import * as types from "../models/app-types";
import { AppDataService } from '../service/app-data.service';

const template: string = `
<ul class ="vertical_slider">
    <li *ngFor="let item of imagePaths">
        <img class="trollImage" [src]="item" />
    </li>
</ul>
`

@Component({
    selector: 'carousel',
    template: template
})
export class CarouselComponent implements OnInit {
    @Input() data: any;
    @Input() id: string;
    @Input() imagePaths: string[]

    constructor() {

    }

    ngOnInit(): void {
        $(document).ready(() => {
            $('.vertical_slider').lightSlider({
                item: 1,
                vertical: true,
                verticalHeight: 600,
                auto: true,
                loop: true,
                pauseOnHover: true
            });
        });
    }


    ngAfterViewInit(): void {
    }

}

