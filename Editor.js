import React, { Component } from 'react';
import Preview from './Preview';

const placeholder = "Preview";
const textBoxStyle = {
  width: 800,
  height: 400
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
        <textarea type="text" style={textBoxStyle} onChange={this.inputChange}/>
        <Preview text={this.state.mkd}/>
      </div>
    )
  }
}

export default Editor;
