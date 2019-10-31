import { Store, StoreConfig } from '@datorama/akita';

export interface CountState {
    count: number
}

export function initialState(): CountState {
    return {
        count: 0
    };
}

@StoreConfig({ name: "count" })
export class CountStore extends Store<CountState> {
    constructor() {
        super(initialState());
    }
}

export const countStore = new CountStore();
