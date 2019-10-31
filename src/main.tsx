import * as React from "react";

import { render } from "react-dom";
import { hot } from "react-hot-loader/root";

import { App } from "./App";

function Scaffold() {
    return (
        <App />
    );
}

const HotScaffold = hot(Scaffold);

render(<HotScaffold />, document.getElementById("app"));
