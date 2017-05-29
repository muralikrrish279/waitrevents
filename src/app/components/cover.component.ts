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
<div class="cover">
    <div class="hanging-light">
        <div class="his-line"></div>
        <div class="his-story">
            <a routerLink="/story/he" routerLinkActive="active">His Story</a>
        </div>
    </div>
    <div class="hanging-light">
        <div class="her-line"></div>
        <div class="her-story">
            <a routerLink="/story/she" routerLinkActive="active">Her Story</a>        
        </div>
    </div>
    <div class="hanging-light">
        <div class="their-line"></div>
        <div class="their-story">
            <a routerLink="/story/meetup" routerLinkActive="active">Their Story</a>        
        </div>
    </div>
    <div class="hanging-light">
        <div class="invite-line"></div>
        <div class="invite-story">
            <a routerLink="/invite" routerLinkActive="active">You are Invited!!</a>        
        </div>
    </div>
</div>`

@Component({
    selector: 'cover',
    template: template
})
export class CoverComponent implements OnInit {
    private type: types.eventType = types.eventType.he;

    constructor(private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit(): void {

    }

}

