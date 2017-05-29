import {
    Component, OnInit, AfterViewInit, Input,
    Output, ChangeDetectionStrategy
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as types from "../models/app-types";
import { AppDataService } from '../service/app-data.service';
import { he } from "../models/data/he";
import { she } from "../models/data/she";

const template: string = `
<div id="tile">
    <img id="reporting-icon" src="http://dummyimage.com/48x48/d8d8d8/fff.png&text=icon"/>
    
    <div id="line-vr"></div>

    <div id="header-text">
        <p>Quick Reports</p>
    </div>
    
    <img id="arrow-icon" src="http://dummyimage.com/16x16/d8d8d8/fff.png&text=icon"/>

    <div id="text">
    <a href ="#" class="text-link">View Reports</a>
    </div>
</div>`

@Component({
    selector: 'tile',
    template: template
})
export class TileComponent implements OnInit {
    private type: types.eventType = types.eventType.he;

    constructor(private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit(): void {
    
    }

}

