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
    styleClass: string,
    structure: Structure | string
}
export interface Row {
    styleClass: string,
    columns: Column[]
}
export interface Column {
    gadgets: Gadget[],
    styleClass: string,
    style?: string
}
export interface Gadget {
    instanceId: number;
    tags: any[],
    componentType: String,
    config: Config
}
export interface Config {
    propertyPages: any[]
}

export interface Layout {
    id: number,
    boardInstanceId: number,
    title: string,
    checked: boolean,
    structure: string,
    rows: Row[]
}
