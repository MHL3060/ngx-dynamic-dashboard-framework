import {Component, Input} from '@angular/core';

@Component({
  selector: 'dashboard-board',
    moduleId: module.id,
  templateUrl: './ngx-adf.component.html'
})
export class NgxAdfComponent {
    @Input()
    title = "app works";

    @Input()
    showMenu = true;
}
