import * as React from "react";

export interface Props {
    who: string;
}

export class Component extends React.Component<Props, {}> {
    static displayName = "Hello";

    render() {
        return <h1>Hello, {this.props.who}!</h1>;
    }
}
