import React from "react";
import TheHeader from "./header";
import TheFooter from "./footer";
import TheForm from "./form";
import TheList from "./List";
import { manga } from "../api/manga.js";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {}
        };
    }
    async ajax(payload = FormData) {
        const response = await manga( payload );
        this.setState({ data: response });
    }
    render() {
        return (<main className="main ts-container is-narrow">
            <TheHeader />
            <TheForm submit={e=>this.ajax(e)} />
            <TheList data={this.state.data} jumpPage={this.jumpPage} />
            <TheFooter />
        </main>);
    }
}

export default App;
