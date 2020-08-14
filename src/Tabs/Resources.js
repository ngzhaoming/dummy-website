import React from 'react';
import logo from '../assets/cool.gif';

export default class Resources extends React.Component {
    render() {
        return (
            <div style={conStyle} className="resources">
                <img style={imgStyle} src={logo} alt="cool" />
                <h1>Hey kid, tell me the code and I will pass you the goods</h1>
                <a href="./test.txt" download="bottle">
                    Download
                </a>
            </div>
        )
    }
}

const conStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: 'column',
    alignItems: "center",
}

const imgStyle = {
    height: '350px',
    width: '350px',
    alignSelf: 'center'
}