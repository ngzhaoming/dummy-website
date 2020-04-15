import React, { Component } from 'react';
import './App.css';
import Form from './Form'

class App extends Component {
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
      <div className="App">
        <div className="jumbotron jumbotron-fluid" style={{textAlign: "center"}}>
          <h1 class="display-4" style={{fontWeight: "bold"}}>🎉🎈🎂🥳🎁 HAPPY BIRTHDAY!!! 🎁🥳🎂🎈🎉</h1>
          <p>Took you long enough to reach here</p>
        </div>

        <div className="container">
          <h1>Solve this riddle to get the final link:</h1>
          <p>
            With reference to the riddle.png picture given to you, find 2 prime numbers from the picture.
            Multiply these two numbers together and type the answer in the text input below. Then click 
            on the submit button.
          </p>

        <Form onChange={fields => this.onChange(fields)} />

        </div>
      </div>
    );
  }
}

export default App;
