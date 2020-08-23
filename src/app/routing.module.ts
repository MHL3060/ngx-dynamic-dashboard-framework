import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NgxAdfComponent} from './ngx-adf.component';
import {BoardComponent} from './board/board.component';
import {DetailComponent} from './detail/detail.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'main-board',
        pathMatch: 'full'
    },
    {
        path: '',
        component: NgxAdfComponent
    },
    {
        path: 'main-board',
        component: BoardComponent
    },
    {
        path: 'detail',
        component: DetailComponent,
        runGuardsAndResolvers: 'always'
    },


];

@NgModule({
    imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
})
export class RoutingModule {
}

