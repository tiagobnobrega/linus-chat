import React from 'react';

import './Header.css';
import IconMinimize from './ic-minimize.svg';

const Header = props => (
  <header>
    <title>{props.title || 'Chat'}</title>
    <div className="actions">
      <div className="action close" onClick={props.onMinimize}>
        <img src={IconMinimize} atl="close" />
      </div>
    </div>
  </header>
);

export default Header;
