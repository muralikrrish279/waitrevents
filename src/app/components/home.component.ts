import {
    Component, OnInit, AfterViewInit, Input,
    Output, ChangeDetectionStrategy
} from '@angular/core';
import * as types from "../models/app-types";
import { AppDataService } from '../service/app-data.service';

const template: string = `
<div class="container-fluid home">
    <div class="row myRow">
      <div class="col-md-6 col-xs-12 col-lg-6 left-section">
        <carousel [data]="null"></carousel>
      </div>
      <div class="col-md-6 col-xs-12 col-lg-6 right-section">
        <carousel [data]="null"></carousel>
      </div>
    </div>
</div>`

@Component({
    selector: 'home',
    template: template
})
export class HomeComponent implements OnInit {
    @Input() data: types.ITimeline;

    constructor() {
        
    }

    ngOnInit(): void {

    }

}

