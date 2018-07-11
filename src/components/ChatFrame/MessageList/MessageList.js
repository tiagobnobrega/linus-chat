import React from 'react';

import './MessageList.css';

const MessageList = props => (
  <div className="message-list-wrapper">
    <div className="message-list">{props.messages && props.messages.map(m => <div>{m.payload}</div>)}</div>
  </div>
);

export default MessageList;
