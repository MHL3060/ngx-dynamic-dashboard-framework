import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DetailComponent} from './detail.component';
import {DetailService} from './service';
import {FilterPipe} from './filter.pipe';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        DetailComponent,
        FilterPipe
    ],
    providers: [
        DetailService
    ],
    exports: [
        DetailComponent
    ]
})
export class DetailModule {
}

