import React, { Component } from 'react';

class Result extends Component {

    displayAnswers = () => {
        const answers = this.props.state.answers;
        const results = this.props.state.data.results;

        let result = [];

        for(let i = 0; i < results.length; i++) {
            if(answers[i].toString() === results[i].correct_answer.toString()) {
                result.push(
                    <div key = { i + 1 } >
                        { i + 1 } { answers[i] } Correct
                    </div>
                );
            } else if(answers[i].toString() === "") {
                result.push(
                    <div key = { i + 1 } >
                        { i + 1 } { answers[i] } Unattempted
                    </div>
                );
            } else {
                result.push(
                    <div key = { i + 1 } >
                        { i + 1 } { answers[i] } Incorrect
                    </div>
                );
            }
        }

        return result;
    }

    render() {
        return(
            <div>
                { this.props.state.name } your score: { this.props.state.score }
                <br />
                <br />
                { this.displayAnswers() }
            </div>
        );
    }
}

export default Result;