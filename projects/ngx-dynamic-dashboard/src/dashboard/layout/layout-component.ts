/**
 * Created by jayhamilton on 1/24/17.
 */
import {AfterViewInit, Component, EventEmitter, Inject, Input, Output} from '@angular/core';

import {boardLayouts} from './model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NextObserver} from 'rxjs';
import {LayoutControl} from './LayoutControl';


/**
 * Message Modal - clasable modal with message
 *
 * Selector message-modal
 *
 * Methods
 *      popMessageModal - display a message modal for a sepcified duration
 *      showMessageModal - show the message modal
 *      hideMessageModal - hide the message modal
 */
@Component({
    selector: 'dashboard-layout-manager-modal',
    moduleId: 'layout',
    templateUrl: './view.html',
    styleUrls: ['./styles.css']

})
export class BoardLayoutManagerComponent {
    boardLayouts: any[];

    modalHeader = 'Layout';

    messageModal: any;

    constructor(@Inject(MAT_DIALOG_DATA) public layoutControl: LayoutControl) {
        this.initializeLayouts();
    }

    selectBoardLayout(layoutId: number) {

        for (let x = 0; x < this.boardLayouts.length; x++) {

            if (this.boardLayouts[x].id === layoutId) {
                this.layoutControl.layoutChangeObserver.next(this.boardLayouts[x]);
                this.layoutControl.layoutId = layoutId;
                break;
            }
        }
    }

    initializeLayouts() {
        Object.assign(this, {boardLayouts});
    }
}
