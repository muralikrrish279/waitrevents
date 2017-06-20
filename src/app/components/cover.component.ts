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
        <div class="his-story">
            <a routerLink="/story/he" routerLinkActive="active">
                <i class="glyphicon glyphicon-king"></i>            
            </a>
        </div>
    </div>
    <div >
        <div class="her-story" title="Her Story">
            <a routerLink="/story/she" routerLinkActive="active">
                <i class="glyphicon glyphicon-queen"></i>
            </a>        
        </div>
    </div>
    <div class="hanging-light">
        <div class="their-story">
            <a routerLink="/story/meetup" routerLinkActive="active">
                <i class="glyphicon glyphicon-heart"></i>            
            </a>        
        </div>
    </div>
    <div class="hanging-light">
        <div class="invite-story">
            <a routerLink="/invite" routerLinkActive="active">
                <i class="glyphicon glyphicon-bell"></i>                
            </a>        
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

