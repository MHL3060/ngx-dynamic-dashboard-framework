import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Facet} from './facet-model';

/**
 * Created by jayhamilton on 6/27/17.
 */
@Component({
    moduleId: module.id,
    selector: 'dashboard-filter-list',
    template: `
        <br>
        <div *ngFor='let facet of facet_tags ;let i = index'>

            <dashboard-facet [facet]='facet' (tagSelectEvent)='tagSelect($event)' [openFacet]='i < 2'></dashboard-facet>

        </div>
    `,
    styleUrls: ['./styles.css']
})
export class FilterListComponent {
    @Output() tagSelectEvent: EventEmitter<any> = new EventEmitter();
    @Input() facet_tags: Array<Facet>;

    tagSelect(tagName) {

        this.tagSelectEvent.emit(tagName);

    }
}
