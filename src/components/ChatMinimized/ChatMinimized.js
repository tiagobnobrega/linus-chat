import React, { Component } from 'react';
import minimized from './minimized.svg';

import './ChatMinimized.css';

class ChatMinimized extends Component {
  render() {
    console.log('props:', this.props);
    return (
      <div className="minimized" onClick={this.props.onMaximize}>
        <img src={minimized} className="logo" alt="logo" />
      </div>
    );
  }
}

export default ChatMinimized;
