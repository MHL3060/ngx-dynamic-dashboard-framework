import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about-component';
import {AboutService} from './service';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule
    ],
    declarations: [AboutComponent],
    exports: [AboutComponent],
    providers: [AboutService]
})
export class AboutModule {
}
