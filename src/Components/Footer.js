import React, { Component } from 'react';

class Footer extends Component {

    previous = () => {
        this.props.setIndex(-1);
    }

    next = () => {
        this.props.setIndex(1);
    }

    submitTest = () => {
        this.props.submitTest();
    }

    render() {
        return(
            <div>
                <button onClick = { this.previous } > Previous </button>
                <button onClick = { this.next } > Next </button>
                <button onClick = { this.submitTest } > Submit Test </button>
            </div>
        );
    }
}

export default Footer;