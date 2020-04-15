import React from 'react';

const initialState = {
    answer: "",
    answerError: "",
};

export default class Form extends React.Component {
    state = initialState;

    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
          [e.target.name]: e.target.value
        });
    };

    validate = () => {
        let answerError = "";
    
        if (!this.state.answer.includes("360329")) {
            answerError = "Your answer is wrong! Please refer to the hint and try again! 🥺🥺\nYour answer: " + this.state.answer;
        } else {
            answerError = "Congratulations! Here is your reward!\nhttps://www.youtube.com/watch?v=5tiLf_bCClU";
        }
    
        if (answerError) {
          this.setState({ answerError });
          return false;
        }
    
        return true;
    };

    onSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.setState({
                answer: "",
            });
            this.props.onChange({
                answer: "",
            });

            this.setState(initialState);
        }
    };

    render() {
        return (
            <form>
                <div>
                    <input
                    name="answer"
                    placeholder="Input your answer here:"
                    value={this.state.answer}
                    onChange={e => this.change(e)}
                    />

                    <div style={{fontSize: 12, color: "red"}} >
                        {this.state.answerError}
                    </div>
                </div>
                <button style={{marginTop: "5px"}} onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        )
    }
}