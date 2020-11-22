export interface Board {
    rows: Row[],
    title: string,
    boardInstanceId: number,
    id: number,
    structure: Structure
}

export interface Structure {
    id: number,
    rows: Row[],
    structure: Structure
}
export interface Row {
    columns: Column[]
}
export interface Column {
    gadgets: Gadget[]
}
export interface Gadget {
    instanceId: number;
    componentType: string,
    config: Config,
    name: string,
    tags: Tag[]
}

export interface Tag {
    facet: string,
    name: string
}
export interface Config {
    propertyPages: PropertyPage[]
}
export interface PropertyPage {
    displayName: string,
    groupId: string,
    position: number,
    properties: Property[]
}
export interface Property {
    value: string|number,
    key: string,
    label: string,
    required: boolean,
    order: number,
    controlType: string
}
