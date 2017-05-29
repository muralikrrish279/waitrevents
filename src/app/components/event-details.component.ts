import {
    Component, OnInit, AfterViewInit, Input,
    Output, ChangeDetectionStrategy
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as types from "../models/app-types";
import { AppDataService } from '../service/app-data.service';

const template: string = `
<div class="eventsHome">
    <ul class ="tiles row">
        <li class="col-xs-6">
        </li>
         <li class="col-xs-6">
        </li>
         <li class="col-xs-6">
        </li>
         <li class="col-xs-6">
        </li>
         <li class="col-xs-6">
        </li>
         <li class="col-xs-6">
        </li>
    </ul>  
</div>
`

@Component({
    selector: 'event-details',
    template: template
})
export class EventDetailsComponent implements OnInit {
    private type: types.eventType = types.eventType.he;

    constructor(private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit(): void {
        this.tileCarouselInit();
    }

    tileCarouselInit() {
        $(document).ready(() => {
            $('.tiles').lightSlider({
                item: 3,
                auto: true,
                loop: true,
                pauseOnHover: true
            });
        });
    }

}

