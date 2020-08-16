import React, { Component } from 'react';

class Home extends Component {

    submit = () => {
        const name = document.getElementById("name").value;
        console.log(name);
        document.getElementById("id").innerHTML = name;
    }

    render() {
        return(
            <div>
                <input type = "text" placeholder = "Enter You Name" id = "name" />
                <br />
                <button onClick = { this.submit } > Submit </button>

                <p id = "id" ></p>
            </div>
        );
    }
}

export default Home;