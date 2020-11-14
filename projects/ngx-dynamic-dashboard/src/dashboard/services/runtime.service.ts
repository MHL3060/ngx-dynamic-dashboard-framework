/**
 * Created by jayhamilton on 1/18/17.
 */
import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {ErrorHandler} from '../error/error-handler';
import {HttpErrorResponse} from '@angular/common/http';


@Injectable()
export class RuntimeService {


    constructor() {
    }

    static handleError(err: HttpErrorResponse | any) {

        const errMsg: any = {
            status: '-1',
            statusText: '',
            resource: ''
        };


        if (err.error instanceof Error) {
            errMsg.statusText = err.error.message;
            console.log('Client error');

        } else {
            errMsg.status = err.status;
            errMsg.statusText = 'A backend error occurred. In all likelihood the server/api service is not running.';
            errMsg.resource = err.url;

        }

        return throwError(ErrorHandler.getErrorObject(errMsg));

    }

}
