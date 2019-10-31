import { Query } from "@datorama/akita";

import { CountState, CountStore, countStore } from "./count.store";

export class CountQuery extends Query<CountState> {
    constructor(protected readonly store: CountStore) {
        super(store);
    }
}

export const countQuery = new CountQuery(countStore);
