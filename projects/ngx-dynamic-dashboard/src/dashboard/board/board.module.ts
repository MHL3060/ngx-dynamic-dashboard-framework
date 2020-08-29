import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridModule} from '../grid/grid.module';
import {BoardComponent} from './board.component';

@NgModule({
    imports: [
        CommonModule,
        GridModule,
    ],
    providers: [],
    declarations: [
        BoardComponent
    ]
})
export class BoardModule {
}
