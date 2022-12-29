import React from "react";

class TheForm extends React.Component {
    constructor(props = { submit: () => {} }) {
        super(props);
        this.state = {};
    }
    submit_event(event = Event) {
        event.preventDefault();
        const form = new FormData(event.target);
        this.props.submit( form );
    }
    render() {
        return (<form className="the-form my-gap" onSubmit={(e) => this.submit_event(e)}>
            <div className="ts-input is-end-labeled">
                <input name="title" type="text" placeholder="Input manga title" />
                <input type="submit" value="Query" className="label" />
            </div>
        </form>);
    }
}

export default TheForm;
