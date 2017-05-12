import {
    Component, OnInit, AfterViewInit, Input,
    Output, ChangeDetectionStrategy
} from '@angular/core';
import * as types from "../models/app-types";
import { AppDataService } from '../service/app-data.service';

const template: string = `
<ul id ="vertical">
    <li>
        <img src="https://c1.staticflickr.com/1/629/32307168200_0a59a039cd.jpg" />
    </li>
    <li>
        <img src="https://c1.staticflickr.com/1/580/31851290933_e4df948a60.jpg" />
    </li>
    <li>
        <img src="https://c1.staticflickr.com/1/580/31851290933_e4df948a60.jpg" />
    </li>
    <li>
        <img src="https://c1.staticflickr.com/1/580/31851290933_e4df948a60.jpg" />
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

    constructor() {

    }

    ngOnInit(): void {
        $('#vertical').lightSlider({
            item: 1,
            vertical: true,
            verticalHeight: 600,
            auto: true,
            loop: true,
            slideMargin: 0
        });
    }

}

