import React, { Component } from 'react';

class Question extends Component {

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

    submit = (results, index) => {
        let score = 0;

        if(event.target.value === results[index].correct_answer)
            score = 1;
        this.props.updateState(event.target.value, score);
    }

    render() {
        const index = this.props.state.index;
        const results = this.props.state.data.results;

        return(
            <div>
                {/* Question { index+1 } { this.checkQuotes(results[index].question) } */}
                Question { index+1 } { results[index].question }
                <form>
                    { this.options(results, index) }
                </form>
                <button onClick = { this.submit(results, index) } > Submit </button>
            </div>
        );
    }
}

export default Question;