import React, { Component } from 'react';
import './LinusChat.css';
import ChatFrame from './components/ChatFrame/ChatFrame';
import ChatMinimized from './components/ChatMinimized/ChatMinimized';

class LinusChat extends Component {
  renderChatFrame() {
    const { renderFrame } = this.props;
    if (renderFrame) return renderFrame(this.props);
    return <ChatFrame {...this.props} />;
  }

  renderMinimized() {
    const { renderMinimized } = this.props;
    console.log('LinusChat.props=',this.props);
    if (renderMinimized) return renderMinimized(this.props);
    return <ChatMinimized {...this.props} />;
  }

  render() {
    const { isOpen } = this.props;
    return <div className="linus-chat">{isOpen ? this.renderChatFrame() : this.renderMinimized()}</div>;
  }
}

export default LinusChat;
