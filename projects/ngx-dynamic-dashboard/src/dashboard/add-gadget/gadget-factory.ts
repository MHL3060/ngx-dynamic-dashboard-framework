/**
 * Created by jayhamilton on 6/30/17.
 */
// @ts-ignore
import {Type} from '@angular/core';

export class GadgetFactory {

    static componentMap = new Map();

    static getComponentType(gadgetType: string): Type<any> {
        return GadgetFactory.componentMap.get(gadgetType);
    }

    static setComponentType(gadgetType: string, componentRef: Type<any>): void {
        GadgetFactory.componentMap.set(gadgetType, componentRef);
    }
}
