import React, { Component } from 'react';

import Header from './Header/Header';
import MessageList from './MessageList/MessageList';

class ChatFrame extends Component {
  render() {
    return (
      <div className="frame">
        <Header {...this.props} />
        <MessageList {...this.props} />
      </div>
    );
  }
}

export default ChatFrame;
