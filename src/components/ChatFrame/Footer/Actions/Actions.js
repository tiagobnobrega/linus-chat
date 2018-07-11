import React, { Component } from 'react';
import Icons from '../../../LinusIcons';

class Actions extends Component {
  render() {
    const { actionsMode, sendMessage, sendCurrentTextMessage, currentTextMessage } = this.props;
    return {
      idle: (
        <div className="icon" onClick={() => console.log('teste')}>
          <Icons.Attach />
        </div>
      ),
      text: (
        <div className="icon" onClick={sendCurrentTextMessage}>
          <Icons.Send />
        </div>
      ),
    }[actionsMode];
  }
}

export default Actions;
