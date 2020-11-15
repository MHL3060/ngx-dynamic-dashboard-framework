import {
    Component,
    ComponentFactory,
    ComponentFactoryResolver,
    ComponentRef,
    Input,
    OnInit, Type,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {GadgetInstanceService} from './grid.service';
import {GadgetFactory} from '../add-gadget/gadget-factory';
import {GadgetBase} from '../gadgets/_common/gadget-base';

/*
 this class handles the dynamic creation of components
 */

@Component({
    selector: 'dashboard-grid-cell',
    template: '<ng-template #container></ng-template>'
})
export class CellComponent implements OnInit {
    @Input() gadgetType: string;
    @Input() gadgetConfig: any;
    @Input() gadgetInstanceId: number;
    @Input() gadgetTags: Array<any>;

    @ViewChild('container', {static: true, read: ViewContainerRef}) viewContainerRef: ViewContainerRef;


    constructor(
        private cfr: ComponentFactoryResolver, private gadgetInstanceService: GadgetInstanceService) {
    }

    ngOnInit() {
        /*
         create component instance dynamically
         */
        const component: Type<any> = GadgetFactory.getComponentType(this.gadgetType);
        if (component) {
            const compFactory = this.cfr.resolveComponentFactory(component);
            const gadgetRef: ComponentRef<GadgetBase> = this.viewContainerRef.createComponent(compFactory);

            /*
             we need to pass the input parameters (instance id and config) back into the newly created component.
             */
            gadgetRef.instance.configureGadget(this.gadgetInstanceId, this.gadgetConfig, this.gadgetTags);

            /*
             add concrete component to service for tracking
             */
            this.gadgetInstanceService.addInstance(gadgetRef);
        }

    }

}

