import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridModule} from '../grid/grid.module';
import {BoardComponent} from './board.component';
import {MenuModule} from '../menu/menu.module';

@NgModule({
    imports: [
        CommonModule,
        GridModule,
        MenuModule,
    ],
    providers: [],
    declarations: [
        BoardComponent
    ],
    exports: [
        BoardComponent
    ]
})
export class BoardModule {
}
