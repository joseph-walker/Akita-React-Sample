import * as React from "react";

import { useQuery } from "./hooks/useQuery";
import { countQuery } from "./state/count.query";
import { countService } from "./state/count.service";

export function App() {
    const count = useQuery(countQuery, "count");

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => countService.increment()}>+</button>
            <button onClick={() => countService.decrement()}>-</button>
        </>
    );
}
