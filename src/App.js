import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';

import './App.css';
import Birthday from './Tabs/Birthday'
import Resources from './Tabs/Resources'

class App extends Component {
  render() {
    return (
      // This is the HTML code
      <div className="App">
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
            
          </Tab>
          <Tab eventKey="birthday" title="Birthday">
            <Birthday/>
          </Tab>
          <Tab eventKey="anniversary" title="Anniversary">
            
          </Tab>
          <Tab eventKey="resources" title="Resources">
            <Resources/>
          </Tab>
          <Tab eventKey="ideas" title="Ideas" disabled>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
