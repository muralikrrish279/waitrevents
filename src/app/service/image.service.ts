import { Injectable } from '@angular/core';
import { Observable } from 'rxJs';
import * as types from "../models/app-types";
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ImageService {

    constructor(private http: Http) {

    }

    hisImages(): Observable<any[]> {
        let url = "/images/he";
        let result = [];
        return this.http.get(url).map(this.mapResult);
    }

    mapResult(result: Response) {
        let output = {};
        if (output) {
            output = result.json();
            return output;
        }
    }
}