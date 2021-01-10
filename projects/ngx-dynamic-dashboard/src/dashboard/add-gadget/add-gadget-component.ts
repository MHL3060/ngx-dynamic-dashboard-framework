/**
 * Created by jayhamilton on 1/24/17.
 */
import {AfterViewInit, Component, ElementRef, EventEmitter, Inject, OnInit, Output, ViewChild} from '@angular/core';

import {animate, style, transition, trigger} from '@angular/animations';

import {AddGadgetService} from './service';
import {Facet} from '../facet/facet-model';
import {FacetTagProcessor} from '../facet/facet-tag-processor';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NextObserver, Observable, Subject, Subscribable} from 'rxjs';

declare var jQuery: any;

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
    selector: 'dashboard-add-gadget-modal',
    moduleId: module.id,
    templateUrl: './view.html',
    styleUrls: ['./styles.css'],
    animations: [
        trigger(
            'showHideAnimation',
            [
                transition(':enter', [   // :enter is alias to 'void => *'
                    style({opacity: 0}),
                    animate(750, style({opacity: 1}))
                ]),
                transition(':leave', [   // :leave is alias to '* => void'
                    animate(750, style({opacity: 0}))
                ])
            ])
    ]

})
export class AddGadgetComponent implements OnInit {


    gadgetObjectList: any[] = [];
    gadgetObjectTitleList: string[] = [];
    placeHolderText = 'Begin typing gadget name';
    layoutColumnOneWidth = 'six';
    layoutColumnTwoWidth = 'ten';
    listHeader = 'Gadgets';
    facetTags: Array<Facet>;

    color = 'white';

    typeAheadIsInMenu = false;

    modalicon: string;
    modalheader: string;
    modalmessage: string;



    messageModal: any;

    constructor(private _addGadgetService: AddGadgetService,
        @Inject(MAT_DIALOG_DATA) private addGadgetEvent: NextObserver<any>) {
        this.modalheader = 'Add Gadget';
    }

    ngOnInit() {
        this.getObjectList();
    }

    actionHandler(actionItem, actionName) {
        this.addGadgetEvent.next(actionItem);
    }


    showMessageModal(icon: string, header: string, message: string) {
        this.modalicon = icon;
        this.modalheader = header;
        this.modalmessage = message;
       // this.messageModal.modal('show');

    }

    getObjectList() {

        this._addGadgetService.getGadgetLibrary().subscribe(data => {
            this.gadgetObjectList.length = 0;
            const me = this;
            data.library.forEach(function (item) {

                me.gadgetObjectList.push(item);
                me.gadgetObjectTitleList.push(item.name);
            });
            const facetTagProcess = new FacetTagProcessor(this.gadgetObjectList);
            this.facetTags = facetTagProcess.getFacetTags();
        });

    }
}
