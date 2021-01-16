import {NextObserver} from 'rxjs';

export interface LayoutControl {
    layoutId: number,
    layoutChangeObserver: NextObserver<any>
}
