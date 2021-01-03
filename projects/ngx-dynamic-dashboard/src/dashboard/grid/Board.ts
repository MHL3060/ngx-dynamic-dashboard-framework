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
    gadgets: Gadget[],
    styleClass: string
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
