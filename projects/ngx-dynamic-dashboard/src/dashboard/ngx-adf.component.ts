import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './ngx-adf.component.html'
})
export class NgxAdfComponent {
    @Input()
    showMenu = true;
}
