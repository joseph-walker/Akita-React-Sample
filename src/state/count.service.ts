import { CountStore, countStore } from "./count.store";

export class CountService {
    constructor(private readonly countStore: CountStore) {
        //
    }

    public increment() {
        this.countStore.update(function (state) {
            return {
                count: state.count + 1
            };
        });
    }

    public decrement() {
        this.countStore.update(function (state) {
            return {
                count: state.count - 1
            };
        });
    }
}

export const countService = new CountService(countStore);
