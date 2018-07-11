import React, { Component } from 'react';
import Icons from '../LinusIcons';

import './ChatMinimized.css';

class ChatMinimized extends Component {
  render() {
    console.log('props:', this.props);
    return (
      <div className="minimized" onClick={this.props.onMaximize}>
        <Icons.Minimized />
      </div>
    );
  }
}

export default ChatMinimized;
