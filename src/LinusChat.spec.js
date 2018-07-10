import React from 'react';
import ReactDOM from 'react-dom';
import LinusChat from './LinusChat';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LinusChat />, div);
  ReactDOM.unmountComponentAtNode(div);
});
