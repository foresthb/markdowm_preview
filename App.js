import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {  MarkdownPreview  } from 'react-marked-markdown';

const placeholder = "Preview";
const textBoxStyle = {
  width: 800,
  height: 200
}

const PreviewBoxStyle = {
  border: '1.5px solid skyblue',
  color: 'yellowgreen'
}

class Preview extends Component {
  render() {
    return (
      <div className="Prv" style={PreviewBoxStyle}>
        <MarkdownPreview value={this.props.text} />
      </div>
    )
  }
}

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mkd: placeholder
    }
    this.inputChange = this.inputChange.bind(this);
  }
  inputChange(event) {
    this.setState({
      mkd: event.target.value
    });
  }
  render() {
    return (
      <div>
        <textarea type="text" style={textBoxStyle} onChange={this.inputChange} />
        <Preview text={this.state.mkd} />
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Editor />
        </header>
      </div>
    );
  }
}

export default App;
