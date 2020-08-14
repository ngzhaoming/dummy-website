import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from '../Form';

export default class Birthday extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    
    state = {
        fields: {}
    };

    onChange = updatedValue => {
        this.setState({
            fields: {
            ...this.state.fields,
            ...updatedValue
            }
        });
    };
    
    render() {
        return (
            <div className="birthday">
                <div className="jumbotron jumbotron-fluid" style={{textAlign: "center"}}>
                    <h1 class="display-4" style={{fontWeight: "bold"}}>🎉🎈🎂🥳🎁 HAPPY BIRTHDAY!!! 🎁🥳🎂🎈🎉</h1>
                    <p>Took you long enough to reach here</p>
                </div>
        
                <div className="container">
                    <h1>Solve this riddle to get the final link:</h1>
                    <p>
                        You've managed to come this far, that's very good. Now, try finding 2 prime numbers with the picture
                        you are given, riddle.png. Multiply these two numbers together and type the answer in the text input below. Then click 
                        on the submit button.
                    </p>

                    <Button variant="danger" style={{marginBottom:'15px'}} onClick={this.handleClick}>
                        {this.state.isToggleOn ? 'HINT' : 'Size really does matter after all, huh?'}
                    </Button>
                    <br/>
        
                    <Form onChange={fields => this.onChange(fields)} />
                </div>
            </div>
        )
    }
}