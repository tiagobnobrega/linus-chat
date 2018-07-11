import React, { Component } from 'react';
import { Keyboard } from 'keyboardjs';
import localeUS from 'keyboardjs/locales/us';

import './Footer.css';

import Actions from './Actions/Actions';

class Footer extends Component {
  state = {
    actionsMode: 'idle',
    currentTextMessage: '',
    isTextFocused: false,
  };

  constructor() {
    super();
    this.textInput = React.createRef();
  }

  componentDidMount() {
    const textEl = this.textInput.current;
    this.keyboardJS = new Keyboard(textEl);
    this.keyboardJS.setLocale('us', localeUS);
    this.keyboardJS.bind('enter', this.textInputEnter.bind(this));
    this.keyboardJS.bind('shift+enter', () => {});
  }

  componentWillUnmount() {
    this.keyboardJS.stop();
  }

  textInputEnter = e => {
    e.preventDefault();
    this.sendCurrentTextMessage();
  };

  getActionsMode = ({ currentTextMessage, isTextFocused }) => {
    if (isTextFocused || currentTextMessage) {
      return 'text';
    }
    return 'idle';
  };

  doSetState = stateUpdate => {
    const nextState = { ...this.state, ...stateUpdate };
    const actionsMode = this.getActionsMode(nextState);
    this.setState({ ...stateUpdate, actionsMode });
  };

  handleTextChange = e => {
    const { value } = e.target;
    this.doSetState({ currentTextMessage: value });
  };

  handleFocus = e => {
    const { target } = e;
    const isTextFocused = target === document.activeElement;
    this.doSetState({ isTextFocused });
  };

  sendMessage = message => {
    const { onSendMessage } = this.props;
    if (onSendMessage) {
      onSendMessage(message);
    }
  };

  sendCurrentTextMessage = () => {
    const messageText = this.state.currentTextMessage;
    if (!messageText || !messageText.trim()) return;
    this.sendMessage({ type: 'text', payload: messageText });
    this.doSetState({ currentTextMessage: '' });
  };

  renderFooterActions = () => {
    const { sendMessage, sendCurrentTextMessage } = this;
    const { renderFooterActions } = this.props;
    const { actionsMode, currentTextMessage } = this.state;
    if (renderFooterActions) {
      return renderFooterActions({ actionsMode, sendMessage, sendCurrentTextMessage, currentTextMessage });
    }
    return <Actions {...{ actionsMode, sendMessage, sendCurrentTextMessage, currentTextMessage }} />;
  };

  render() {
    const { currentTextMessage } = this.state;
    return (
      <footer>
        <textarea
          ref={this.textInput}
          value={currentTextMessage}
          onChange={this.handleTextChange}
          onFocus={this.handleFocus}
          onBlur={this.handleFocus}
        />
        <div className="actions">{this.renderFooterActions()}</div>
      </footer>
    );
  }
}

export default Footer;
