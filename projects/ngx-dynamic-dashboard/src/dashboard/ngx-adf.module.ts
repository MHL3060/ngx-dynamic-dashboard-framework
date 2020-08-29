import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxAdfComponent} from './ngx-adf.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {DetailModule} from './detail/detail.module';
import {MenuModule} from './menu/menu.module';
import {BoardModule} from './board/board.module';
import {GridModule} from './grid/grid.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        BoardModule,
        MenuModule,
        DetailModule,
        HttpClientJsonpModule,
        GridModule
    ],
    declarations: [
        NgxAdfComponent
    ]
})
export class NgxAdfModule {
}
