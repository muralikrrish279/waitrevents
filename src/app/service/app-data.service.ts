import { Injectable } from '@angular/core';
import * as types from "../models/app-types";

@Injectable()
export class AppDataService {
    config: types.IApp = {
        title: "Karunya Weds Muralikrishnan"
    }
}