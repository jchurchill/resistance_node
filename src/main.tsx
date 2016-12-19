import * as React from "react";
import * as ReactDOM from "react-dom";

import * as Hello from "./components/Hello";

ReactDOM.render(
    <Hello.Component
        who="world"
    />,
    document.getElementById("app")
);