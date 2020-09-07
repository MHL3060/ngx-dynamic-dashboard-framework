/**
 * Created by jayhamilton on 2/7/17.
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GadgetLibraryResponse} from './gadgetLibraryResponse';

@Injectable({providedIn: 'root'})
export class AddGadgetService {
    constructor(private _http: HttpClient) {
    }

    getGadgetLibrary() {
        // TODO: make this configurable. the application need to define this.
        const gadgetLibraryJson = 'gadget-library-model.json';
        return this._http.get<GadgetLibraryResponse>('/assets/api/' + gadgetLibraryJson);
    }
}
