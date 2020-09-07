/**
 * Created by jayhamilton on 6/30/17.
 */

export class GadgetFactory {

    static componentMap = new Map();

    static getComponentType(gadgetType: string): any {
        return GadgetFactory.componentMap.get(gadgetType);
    }

    static setComponentType(gadgetType: string, componentRef: any): void {
        GadgetFactory.componentMap.set(gadgetType, componentRef);
    }
}
