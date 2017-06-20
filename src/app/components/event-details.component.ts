import {
    Component, OnInit, AfterViewInit, Input,
    Output, ChangeDetectionStrategy
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as types from "../models/app-types";
import { AppDataService } from '../service/app-data.service';


const template: string = `
<div class="eventsHome wrapper">
    <div class="cover-header">
        <img src="/images/cover.jpg" alt="Invitation"/>
    </div>
    <div class="tab">
        <button class="tablinks" [ngClass] = "{'active' : isInvitation}" (click)="toggleFlag('Invitation')">
        <i class="glyphicon glyphicon-bullhorn"></i>Invitation</button>
        <button class="tablinks" [ngClass] = "{'active' : isStory}" (click)="toggleFlag('Story')">
        <i class="glyphicon glyphicon-link"></i>Hookup!!</button>
        <button class="tablinks" [ngClass] = "{'active' : isMap}" (click)="toggleFlag('Map')">
        <i class="glyphicon glyphicon-map-marker"></i>Location</button>
        <button class="tablinks" [ngClass] = "{'active' : isLive}" (click)="toggleFlag('Live')">
        <i class="glyphicon glyphicon-facetime-video"></i>Forecast</button>        
    </div>
    <div class="invitation" id="invitation" *ngIf="isInvitation">
        <img src="/images/invite.jpg" alt="Invitation"/>
    </div>
    <div class="their-story" id="their-story" *ngIf="isStory">
        <img src="/images/their-story.jpg" alt="Invitation"/>
    </div>
    <div class="map" *ngIf="isMap">
        <iframe
        frameborder="0" style="border:0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCRsDRlCazTuybtOwpIT2aRhHA0rOh1R1Y&q=swarna+sudarshan+convention+hall" allowfullscreen>
        </iframe>
    </div>
    <div class="skype" *ngIf="isLive">
        <a href="http://www.livewedding.org/karunyamurali" rel="external" target="_blank">
            <img src="/images/video-play.jpg" alt="Invitation"/>
        </a>
    </div>
    <home-link></home-link>
</div>
`

@Component({
    selector: 'event-details',
    template: template
})
export class EventDetailsComponent implements OnInit {
    public isInvitation: boolean = true;
    public isMap: boolean = false;
    public isLive: boolean = false;
    public isStory: boolean = false;

    constructor(private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit(): void {
    }

    toggleFlag(action: string): void {
        this.isInvitation = false;
        this.isLive = false;
        this.isMap = false;
        this.isStory = false;
        switch (action) {
            case "Invitation":
                this.isInvitation = true;
                break;
            case "Story":
                this.isStory = true;
                break;
            case "Map":
                this.isMap = true;
                break;
            case "Live":
                this.isLive = true;
                break;
            default:
                break;
        }
    }


}

