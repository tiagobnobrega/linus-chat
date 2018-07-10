/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import LinusChat from './LinusChat';

storiesOf('LinusChat', module)
  .add('Open', () => <LinusChat isOpen={true} />)
  .add('Closed', () => <LinusChat isOpen={false} />);
