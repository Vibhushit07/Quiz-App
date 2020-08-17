import React, { Component } from 'react';

class Footer extends Component {

    previous = () => {
        this.props.setIndex(-1);
    }

    next = () => {
        this.props.setIndex(1);
    }

    render() {
        return(
            <div>
                <button onClick = { this.previous } > Previous </button>
                <button onClick = { this.next } > Next </button>
            </div>
        );
    }
}

export default Footer;