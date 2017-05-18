import {
    Component, OnInit, AfterViewInit, Input,
    Output, ChangeDetectionStrategy
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as types from "../models/app-types";
import { AppDataService } from '../service/app-data.service';
import { he } from "../models/data/he";
import { she } from "../models/data/she";

const template: string = `<div class="container">
    <div class="page-header">
        <h1 id="timeline">{{data?.timelineName}}</h1>
    </div>
    <ul class="timeline">
        <li *ngFor= "let item of data?.events,let i = index">
          <div class="timeline-badge"><i class="glyphicon glyphicon-check"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">{{item?.title}}</h4>
            </div>
            <div class="timeline-body">
              <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
            </div>
          </div>
        </li>
    </ul>
</div>`

@Component({
    selector: 'timeline',
    template: template
})
export class TimelineComponent implements OnInit {
    private type: types.eventType = types.eventType.he;

    constructor(private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            console.log(params["type"])
            if (params["type"]) {
                switch (params["type"]) {
                    case "he":
                        this.type = types.eventType.he;
                        break;
                    case "she":
                        this.type = types.eventType.she;
                        break;
                    case "meetup":
                        this.type = types.eventType.meetup
                        break;
                    default:
                        this.type = types.eventType.she;
                }
            }
        })
    }

    get data() {
        switch (this.type) {
            case types.eventType.he:
                return he;
            case types.eventType.she:
                return she;
            case types.eventType.meetup:
                return he;
            default:
                break;
        }
    }

}

