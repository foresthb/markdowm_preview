import React, { Component } from 'react';

const PreviewBoxStyle = {
  border: '1.5px solid skyblue',
  color: 'yellowgreen'
}

class Preview extends Component {
  render() {
    return (
      <div style={PreviewBoxStyle}>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default Preview;
