import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {RuntimeService} from '../services/runtime.service';
import {catchError} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AboutService {

    env: any;

    constructor(private _http: HttpClient) {
        this.env = environment;
    }

    getAPIVersion() {
        const url = '/assets/api/version-model.json';
        return this._http.get(url)
            .pipe(
                catchError(RuntimeService.handleError)
            );
    }
}
