import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-adf',
    moduleId: module.id,
  templateUrl: './ngx-adf.component.html'
})
export class NgxAdfComponent {
    @Input()
    title = "app works";

    @Input()
    showMenu = true;
}
