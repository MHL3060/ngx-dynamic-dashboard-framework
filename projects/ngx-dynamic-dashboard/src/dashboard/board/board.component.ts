import {Component, Input} from '@angular/core';

/**a
 * Board component
 *
 */
@Component({
    selector: 'dashboard-board',
    moduleId: module.id,
    templateUrl: './view.html'

})
export class BoardComponent {

    @Input()
    title = 'app works';

    @Input()
    showMenu = true;
}
