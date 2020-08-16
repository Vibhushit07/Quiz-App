import React, { Component } from 'react';

class Home extends Component {

    submit = () => {
        const name = document.getElementById("name").value;
        console.log(name);
        this.props.setName(name);
    }

    render() {
        return(
            <div>
                <input type = "text" placeholder = "Enter You Name" id = "name" />
                <br />
                <button onClick = { this.submit } > Submit </button>
            </div>
        );
    }
}

export default Home;