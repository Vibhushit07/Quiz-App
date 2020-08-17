import React, { Component } from 'react';

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }

        // this.submit = this.submit.bind(this);
    }

    // checkQuotes = (data) => {
    //     var text = data.toString().replace(/&quot;/g, "\"");
    //     return text;
    // }

    options = (results, index) => {
        let options = [];

        options.push( 
            <div key = { results[index].correct_answer } >
                <input type = "radio" name = "options" value = { results[index].correct_answer } /> 
                    { results[index].correct_answer }
            </div>
        );

        for(let i = 0; i < results[index].incorrect_answers.length; i++) {
            options.push( 
                <div key = { results[index].incorrect_answers[i] } >
                    <input type = "radio" name = "options" value = { results[index].incorrect_answers[i] } /> 
                        { results[index].incorrect_answers[i] }
                </div>
            );
        }

        return options;
    }

    verify = event => {

        const index = this.props.state.index;

        if(this.props.state.submitted[index]) {
            event.preventDefault();
            alert("This question is submitted cannot be modified now");

        } else {
            console.log(index);
            console.log(event.target.value);
            this.setState({ value: event.target.value });
        }
    }

    submit = () => {
        let score = 0;
        const index = this.props.state.index;
        const results = this.props.state.data.results;

        if(this.state.value === results[index].correct_answer)
            score = 1;
        this.props.updateState(this.state.value, score);
    }

    render() {
        const index = this.props.state.index;
        const results = this.props.state.data.results;

        return(
            <div>
                {/* Question { index+1 } { this.checkQuotes(results[index].question) } */}
                Question { index+1 } { results[index].question }
                <form onClick = { this.verify } >
                    { this.options(results, index) }
                </form>
                <button onClick = { this.submit } > Submit </button>
            </div>
        );
    }
}

export default Question;